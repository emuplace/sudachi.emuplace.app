import "@mantine/core/styles.css";
import {
    Accordion, Anchor, Badge, Button, Container,
    Flex, Group, List, MantineProvider, Menu,
    Space, Stack, Text, Title, rem
} from "@mantine/core";
import {
    IconDeviceMobile,
    IconDeviceTablet,
    IconDeviceLaptop,
    IconCardboards
} from '@tabler/icons-react';
import { useState } from "react";
import { theme } from "./theme";

export default function App() {
    const changes = [
        {
            text: 'Windows',
            details: [
                {
                    secondaryText: 'Fixed an issue in Super Bomberman R 2 that caused the game to not boot due to an error in the Friend service'
                },
                {
                    secondaryText: 'Fixed an issue in Animal Well that caused the game to not boot due to the audio core revision number being too low'
                },
                {
                    secondaryText: 'Fixed an issue in Princess Peach: Showtime! that caused the game to run into a black screen',
                    tertiaryText: 'Please be aware this fix is not complete and Princess Peach: Showtime! will still drop to 0fps occasionally'
                },
                {
                    secondaryText: 'Fixed an issue in Paper Mario: The Thousand Year Door that caused the sewers to be black when using an AMD graphics card',
                    tertiaryText: 'Thank you to Ryujinx for the pointer towards LogicOp'
                }
            ]
        }
    ];

    const items = changes.map((item) => {
        const listItems = item.details.map((detail) => (
            <List.Item>
                <Text>
                    {detail.secondaryText}
                </Text>
                <Text c={'dimmed'} size="sm" hidden={detail.tertiaryText == '' || detail.tertiaryText == null}>
                    {detail.tertiaryText}
                </Text>
            </List.Item>
        ));

        return (
            <Accordion.Item key={item.text} value={item.text}>
                <Accordion.Control>{item.text}</Accordion.Control>
                <Accordion.Panel>
                    <List>
                        {listItems}
                    </List>
                </Accordion.Panel>
            </Accordion.Item>
        );
    });

    const [opened, setOpened] = useState(false);

    return (
        <MantineProvider theme={theme}>
            <Container>
                <Flex align={'center'} justify={'center'} h={'100vh'}>
                    <Stack>
                        <Anchor href='https://twitter.com/antique_codes' ta={'center'} target='_blank'>
                            @antique_codes
                        </Anchor>
                        <Title order={1} ta={'center'}>
                            Sudachi, a Nintendo Switch emulator
                        </Title>
                        <Text c={'dimmed'} ta={'center'}>
                            Nintendo Switch emulation without the iffy bits and support for more games
                        </Text>
                        <Flex align={'center'} justify={'center'}>
                            <Group ta={'center'}>
                                <Button color="green" radius={'xl'} variant="filled" disabled>Android</Button>
                                <Menu opened={opened} onChange={setOpened}>
                                    <Menu.Target>
                                        <Button radius={'xl'} variant="filled" disabled>Apple</Button>
                                    </Menu.Target>

                                    <Menu.Dropdown>
                                        <Menu.Label>iOS, iPadOS</Menu.Label>
                                        <Menu.Item leftSection={<IconDeviceTablet style={{ width: rem(14), height: rem(14) }} />}>
                                            iPad
                                        </Menu.Item>
                                        <Menu.Item leftSection={<IconDeviceMobile style={{ width: rem(14), height: rem(14) }} />}>
                                            iPhone
                                        </Menu.Item>
                                        <Menu.Divider />
                                        <Menu.Label>macOS</Menu.Label>
                                        <Menu.Item leftSection={<IconDeviceLaptop style={{ width: rem(14), height: rem(14) }} />} disabled>
                                            Apple Silicon
                                        </Menu.Item>
                                        <Menu.Item leftSection={<IconDeviceLaptop style={{ width: rem(14), height: rem(14) }} />} disabled>
                                            Intel
                                        </Menu.Item>
                                        <Menu.Divider />
                                        <Menu.Label>visionOS</Menu.Label>
                                        <Menu.Item leftSection={<IconCardboards style={{ width: rem(14), height: rem(14) }} />} disabled>
                                            Apple Vision Pro
                                        </Menu.Item>
                                    </Menu.Dropdown>
                                </Menu>
                                <Button color="orange" radius={'xl'} variant="filled" disabled>Linux</Button>
                                <Button color="blue" component="a" href="/releases/sudachi-windows-v1.0.7.7z" radius={'xl'} variant="filled">Windows</Button>
                                <Button color="gray" component="a" href="/releases/latest.zip" radius={'xl'} variant="filled">Source Code</Button>
                            </Group>
                        </Flex>
                        <Space h={'md'} />
                        <Group gap={'md'} justify="space-between">
                            <Title order={2}>
                                Changes
                            </Title>
                            <Badge>
                                v1.0.7
                            </Badge>
                        </Group>
                        <Accordion radius={'md'} variant="contained">
                            {items}
                        </Accordion>
                        <Text c={'red'}>
                            Please backup and delete all folders within the Sudachi directory, this will fix the downloadable content and updates issue
                        </Text>
                    </Stack>
                </Flex>
            </Container>
        </MantineProvider>
    );
}
