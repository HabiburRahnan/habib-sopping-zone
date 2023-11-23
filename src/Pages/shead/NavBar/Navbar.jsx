"use client";
import { Navbar, TextInput, Tooltip } from "keep-react";
import { CaretDown, ShoppingCart, MagnifyingGlass } from "phosphor-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between gap-2 ">
        <Navbar.Brand>
          <Link tp="/">
            <Tooltip
              content="Habib Sopping Zone"
              trigger="hover"
              placement="right"
              animation="duration-300"
              style="dark">
              <img
                src="https://i.ibb.co/rmHrLm5/download-42-removebg-preview.png"
                alt="logo"
                width="70"
                height="20"
                className="bg-[#5a2a27] "
              />
            </Tooltip>
          </Link>
        </Navbar.Brand>

        <Navbar.Container className="flex items-center gap-6">
          <Navbar.Container
            tag="ul"
            className="flex items-center justify-between gap-4">
            <TextInput
              id="#id-10"
              placeholder="Search anything"
              color="gray"
              sizing="sm"
              type="text"
              addon={<MagnifyingGlass size={20} color="#5E718D" />}
              addonPosition="md:left"
            />
            <Navbar.Link
              icon={<ShoppingCart size={24} />}
              iconAnimation={false}
            />
          </Navbar.Container>
          <Navbar.Container className="flex gap-1">
            <Navbar.Toggle className="block" />
            Menu
          </Navbar.Container>
        </Navbar.Container>
        <Navbar.Collapse
          collapseType="sidebar"
          className="fixed right-0 top-0 bg-white p-10 lg:!w-2/6 xl:!w-1/6 md:!w-2/6 w-1/2">
          <Navbar.Container tag="ul" className="flex flex-col gap-5">
            <Link to="/">
              <Navbar.Link
                linkName="Home"
                //   icon={<CaretDown size={20} />}
                className="!py-0"
              />
            </Link>
            <Link to="/products">
              <Navbar.Link
                linkName="Projects"
                icon={<CaretDown size={20} />}
                className="!py-0"
              />
            </Link>
            <Link to="/blogs">
              <Navbar.Link
                linkName="Blogs"
                icon={<CaretDown size={20} />}
                className="!py-0"
              />
            </Link>
            <Link to="/news">
              <Navbar.Link linkName="News" className="!py-0" />
            </Link>
            <Link to="/resources">
              <Navbar.Link linkName="Resources" className="!py-0" />
            </Link>
            <Link to="/dashboard">
              <Navbar.Link linkName="Dashboard" className="!py-0" />
            </Link>
          </Navbar.Container>
        </Navbar.Collapse>
      </Navbar.Container>
    </Navbar>
  );
};

export default NavBar;
