import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function formatNumber(number: Number) {
    if (number < 10) {
        return "0" + number;
    }
    return number + "";
}

export default function Header() {
    const [dateStr, setDateStr] = useState("");

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            const day = formatNumber(date.getDate());
            const month = formatNumber(date.getMonth() + 1);
            const year = formatNumber(date.getFullYear());
            const hours = formatNumber(date.getHours());
            const minutes = formatNumber(date.getMinutes());
            setDateStr(`${day}/${month}/${year} ${hours}:${minutes}`);
        }, 1000);
    }, [])
    return (
        <Box
            width="100vw"
            height="50px"
            position="fixed"
            display="flex"
            justifyContent="center"
            left={0}
            right={0}
            top={0}
            zIndex={99999}
        >
            <Box
                width="100vw"
                height="40px"
                display="flex"
                justifyContent="space-between"
                padding="0 20px"
                alignItems="center"
                backdropFilter="blur(5em)"
                background="rgba(0, 0, 0, 0.3)"
                marginRight="0 20px"
                position="relative"
                boxShadow="0 0 10px rgba(0, 0, 0, 0.5)"
            >
                <Heading color="white" fontSize="18px" fontWeight="600">
                    Trieu Vo OS
                    <span style={{
                        marginLeft: "5px",
                        fontSize: "10px",
                        fontWeight: "normal",
                        color: "rgba(255, 255, 255, 0.8)"
                    }}>Build 1.0</span>
                </Heading>
                <Box display="flex" alignItems="center" gap={10}>
                    <Image src="/wifi.svg" width="25px" height="25px" alt="Menu icon" />
                    <Text color="#fff">{dateStr}</Text>
                </Box>
            </Box>
        </Box>
    )
}