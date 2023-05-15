import { Logo, LogoContainer, MenuItem, MenuList, NavContainer, Navbar } from "./styles";

export default async function Menu() {
    const menus = await getData();

    return (
        <Navbar>
            <header >
                <LogoContainer >
                    <Logo>
                        <img src={ menus.data?.attributes.logo.data.attributes.url}                        />
                    </Logo>
                </LogoContainer>
                <NavContainer >
                    <MenuList >
                        {menus.data?.attributes.link.map((menu: any) => (
                            <MenuItem>
                                <li key={menu.id}>
                                    <a href={menu.url}>{menu.label}</a>
                                </li>
                            </MenuItem>
                        ))}
                    </MenuList>
                </NavContainer>
            </header>
        </Navbar>
    );
}




async function getData() {
    const res = await fetch('http://localhost:1337/api/menu?populate=*');

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}