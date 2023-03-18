import { Box, Heading, Text, Image } from "@chakra-ui/react";
import Window, { WindowProps } from "./Window";

export default function About(props: WindowProps) {
    return (
        <Window icon="/information.svg" {...props}>
            <Box padding={20} width="100%">
                <Box width="100%">
                    <Image margin="auto" borderRadius="50%" marginBottom={20} src="/Avatar.webp" alt="Trieu Vo Avatar" width="150px" />
                </Box>
                <Heading color="black">
                    Hi, I&apos;m Trieu Vo (2000)
                </Heading>
                <Text color="black" fontSize={18} lineHeight={1.25}>
                    As a <i>software engineer</i>, I am passionate about using my skills and knowledge to solve challenging problems.  <br />
                    With a strong focus on web development, I am experienced in building robust and scalable web applications. <br />
                    Whether it&apos;s creating new features, fixing bugs, or optimizing performance, I take pride in delivering high-quality software that meets the needs of users. I am constantly seeking to improve my abilities and stay up-to-date with the latest technologies and trends in the industry.
                </Text>
            </Box>
        </Window>
    )
}