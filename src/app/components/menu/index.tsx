import { Logo, LogoContainer, MenuItem, MenuList, NavContainer, Navbar } from "./styles";

export default function Menu({ menus }: any) {

    return (
        <Navbar>
            <header >
                <LogoContainer >
                    <Logo>
                        <img src={menus.data?.attributes.logo.data.attributes.url}></img>
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