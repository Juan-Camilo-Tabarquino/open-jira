import { Box } from "@mui/material"
import Head from "next/head"
import { FC, ReactComponentElement } from "react"
import { Navbar } from "../ui";

interface props {
    title?: string;
    children: JSX.Element;
}

export const Layout: FC<props> = ({title = 'Open Jira App', children}) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
        <Head>
            <title>{ title }</title>
        </Head>

        <Navbar/>
        {/* SideBar */}
        <Box sx={{ padding: '10px 20px' }}>
            { children }
        </Box>

    </Box>
  )
}
