import { Box, Heading, Image, List, ListIcon, ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import Window, { WindowProps } from "./Window";

export default function Experiences(props: WindowProps) {
    return (
        <Window icon="/office-building.svg" {...props}>
            <Box width="100%" display="flex">
                <Image src="/KiteMetric.webp" width="190px" height="190px" alt="Kite Metric Logo" />
                <Box padding="20px 0" width="100%" display="flex" alignItems="flex-start" flexDirection="column">
                    <Heading color="black" textAlign="center" marginBottom={2}>Kite Metric</Heading>
                    <Text color="rgba(0,0,0,0.8)" fontSize={16}><b>Role:</b> Software Engineer</Text>
                    <Text color="rgba(0,0,0,0.8)"><b>Timeline:</b> April 2022 - Now</Text>
                    <Text color="rgba(0,0,0,0.8)"><b>Work description:</b></Text>
                    <UnorderedList color="black">
                        <ListItem>
                            Develop new features for Frontend and Backend of a coaching system that teaches people how to land a job.
                        </ListItem>
                        <ListItem>
                            Implement a payment system for using Shopify and standalone stores
                        </ListItem>
                        <ListItem>
                            Work with multiple teams using Notion fortechnical documents
                        </ListItem>
                        <ListItem>
                            Technologies used: Python, React.Js, Next.Js, Django, Node.Js, Stripe, Charkra UI.
                        </ListItem>
                    </UnorderedList>
                </Box>
            </Box>
            <Box width="100%" display="flex">
                <Image src="/PhenikaaMaaS.webp" width="150px" height="150px" margin="20px" alt="Phenikaa MaaS Logo" />
                <Box padding="20px 0" width="100%" display="flex" alignItems="flex-start" flexDirection="column">
                    <Heading color="black" textAlign="center" marginBottom={2}>Phenikaa MaaS</Heading>
                    <Text color="rgba(0,0,0,0.8)" fontSize={16}><b>Role:</b> Backend Engineer</Text>
                    <Text color="rgba(0,0,0,0.8)"><b>Timeline:</b> June 2021 - March 2022</Text>
                    <Text color="rgba(0,0,0,0.8)"><b>Work description:</b></Text>
                    <UnorderedList color="black">
                        <ListItem>
                            Be one of the most talented personnel in the company in 2021.
                        </ListItem>
                        <ListItem>
                            Develop new features for a school management system that helps teachers, students, and parents to communicate.
                            Technologies used: Golang, PostgresSQL, Qor, Gin.
                        </ListItem>
                        <ListItem>
                            Develop and maintain API and Portal of the Timekeeping module (MaaS Connect) for use in companies and schools.
                            Technologies used: Golang, PostgresSQL, GoAdmin, Qor
                        </ListItem>
                        <ListItem>
                            Develop importing/exporting data features for both Frontend and Backend of Bus Management System. Technologies
                            used: Node.Js, Angular.Js, Restify, Material UI.
                        </ListItem>
                    </UnorderedList>
                </Box>
            </Box>
        </Window>
    )
}