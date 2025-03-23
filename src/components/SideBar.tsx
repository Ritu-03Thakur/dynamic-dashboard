
import Link from 'next/link'
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from './ui/sidebar'
import { RiDashboardFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";


const SideBar = () => {
    const items = [
        {
          title: "Dashboard",
          url: "/dashboard",
          icon: <RiDashboardFill/> ,
        },
        {
          title: "Setting",
          url: "/",
          icon: <IoSettings />,
        },
        {
          title: "Profile",
          url: "/",
          icon: <IoMdContact/>,
        },
        
      ]
  return (
    <Sidebar>
       <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      {item.icon }
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}

export default SideBar
