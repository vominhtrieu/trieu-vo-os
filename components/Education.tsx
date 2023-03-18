import { Box, Heading, Image, Text } from "@chakra-ui/react";
import Window, { WindowProps } from "./Window";

export default function Education(props: WindowProps) {
    return (
        <Window icon="/education.svg" {...props}>
            <Box width="100%" display="flex" alignItems="center" flexDirection="column">
                <Image src="/HCMUS.jpg" width="200px" />
                <Heading color="black" textAlign="center" marginBottom={5}>Ho Chi Minh University of Science</Heading>
                <Text color="#333333" fontSize={20}>Vietnam National University</Text>
                <Text color="#333333" fontSize={18} marginTop={10} fontWeight={600}>Bachelor Degree of Software Engineering</Text>
                <Text color="#333333" fontSize={18} marginTop={10}>08/2018 - 12/2022</Text>
                <Text color="#333333" fontSize={18} marginTop={10} marginBottom={20}><b>GPA: </b>8.33</Text>
            </Box>
        </Window>
    )
}