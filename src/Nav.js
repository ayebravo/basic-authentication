import React from "react";
import { Link, useLocation } from "react-router-dom"; // { } used because I am importing a non-default export from "react-router-dom"
import { Menu } from "antd";
import {
	HomeOutlined,
	ProfileOutlined,
	FileProtectOutlined,
	LayoutOutlined,
} from "@ant-design/icons";

const Nav = () => {
	const location = useLocation();
	const splitLocation = location.pathname.split("/");
	const key =
		splitLocation[1] && splitLocation[1].length > 0
			? splitLocation[1]
			: "home";

	return (
		<div>
			<Menu selectedKeys={[key]} mode="horizontal">
				<Menu.Item key="home">
					<Link to={"/"}>
						<HomeOutlined style={{ paddingRight: "0.3em" }} />
						Home
					</Link>
				</Menu.Item>
				<Menu.Item key="profile">
					<Link to="/profile">
						<ProfileOutlined style={{ paddingRight: "0.3em" }} />
						Profile
					</Link>
				</Menu.Item>
				<Menu.Item key="protected">
					<Link to="/protected">
						<FileProtectOutlined
							style={{ paddingRight: "0.3em" }}
						/>
						Protected
					</Link>
				</Menu.Item>
				<Menu.Item key="morepublic">
					<Link to="/morepublic">
						<LayoutOutlined style={{ paddingRight: "0.3em" }} />
						More Public
					</Link>
				</Menu.Item>
			</Menu>
		</div>
	);
};

export default Nav;
