import Link from "next/link";
import { Logo, LogoContainer, MenuItem, MenuList, NavContainer, Navbar } from "./styles";

export default function Menu({ menus }: any) {

    return (
        <Navbar>
            <header >
                <LogoContainer >
                    <Logo>
                        <Link href="/">
                        <img src={menus.data?.attributes.logo.data.attributes.url}></img>
                        </Link>
                    </Logo>
                </LogoContainer>
                <NavContainer >
                    <MenuList >
                        {menus.data?.attributes.link.map((menu: any) => (
                            <MenuItem key={menu.id}>
                                <li >
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