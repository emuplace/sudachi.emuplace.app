import "@mantine/core/styles.css";
import {
    Accordion, Anchor, Badge, Button, Container,
    Flex, Group, List, MantineProvider,
    Space, Stack, Text, Title,
    VisuallyHidden
} from "@mantine/core";
import { theme } from "./theme";

export default function App() {
    const changes = [
        {
            text: 'v1.0.13',
            sha: 'c5aff15',
            isLatest: true,
            isUpcoming: false,
            details: [
                {
                    system: "Android",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.13/app-mainline-release.apk',
                    last: false,
                    items: [
                        {
                            primaryText: 'Changed mm:u to be more accurate to documentation',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Removed ability to install games to the NAND',
                            secondaryText: null
                        }
                    ]
                },
                {
                    system: "Windows",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.13/sudachi-windows-v1.0.13.7z',
                    last: true,
                    items: [
                        {
                            primaryText: 'Added support for booting to QLaunch via -qlaunch',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Changed mm:u to be more accurate to documentation',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Removed ability to install games to the NAND',
                            secondaryText: null
                        }
                    ]
                }
            ],
            url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.13/latest.zip'
        },
        {
            text: 'v1.0.12',
            sha: '0622bd8',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    system: "Linux",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.12/sudachi-linux-v1.0.12.7z',
                    last: false,
                    items: [
                        {
                            primaryText: 'Added support for Donkey Kong Country™ Returns HD',
                            secondaryText: 'Stubbed hid::SetGestureOutputRanges'
                        },
                        {
                            primaryText: 'Removed broken 19.0.0+ audio changes',
                            secondaryText: null
                        }
                    ]
                },
                {
                    system: "Windows",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.12/sudachi-windows-v1.0.12.7z',
                    last: true,
                    items: [
                        {
                            primaryText: 'Added support for Donkey Kong Country™ Returns HD',
                            secondaryText: 'Stubbed hid::SetGestureOutputRanges'
                        },
                        {
                            primaryText: 'Removed broken 19.0.0+ audio changes',
                            secondaryText: null
                        }
                    ]
                }
            ],
            url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.12/latest.zip'
        }
    ];

    const items = changes.map((item) => {
        const listItems = item.details.map((detail) => {
            const detailItems = detail.items.map((item) => (
                <>
                    <List.Item>
                        <Text>{item.primaryText}</Text>
                        <Text c={'dimmed'} size="sm" hidden={item.secondaryText == '' || item.secondaryText == null}>
                            {item.secondaryText}
                        </Text>
                    </List.Item>
                </>
            ));

            const button = function () {
                if (!detail.last) {
                    return (
                        <VisuallyHidden>
                            <Flex justify={'flex-end'}>
                                <Button color="gray" component="a" disabled={item.url == '' || item.url == null} href={item.url} radius={'md'} size="sm">
                                    Source Code
                                </Button>
                            </Flex>
                        </VisuallyHidden>
                    );
                } else {
                    return (
                        <Flex justify={'flex-end'}>
                            <Button color="gray" component="a" disabled={item.url == '' || item.url == null} href={item.url} radius={'md'} size="sm">
                                Source Code
                            </Button>
                        </Flex>
                    );
                }
            }

            return (
                <>
                    <Title order={3}>
                        {detail.system}
                    </Title>
                    <List>
                        {detailItems}
                    </List>
                    <Space h={'md'} />
                    <Button component="a" disabled={detail.download == '' || detail.download == null} href={detail.download} radius={'md'} size="sm">
                        Download
                    </Button>
                    <Space h={item.url == '' || item.url == null ? 0 : 'md'} />
                    {button()}
                    <Space h={detail.last ? 0 : 'md'} />
                </>
            );
        });

        return (
            <Accordion.Item key={item.text} value={item.text}>
                <Accordion.Control>
                    <Group justify='space-between' pr={'md'}>
                        <Group gap={'sm'}>
                            <Text>
                                {item.text}
                            </Text>
                            <Text c={'dimmed'}>
                                {`(${item.sha})`}
                            </Text>
                        </Group>
                        <Badge color={item.isLatest ? 'green' : item.isUpcoming ? 'violet' : 'red'}>
                            {item.isLatest ? 'Latest' : item.isUpcoming ? 'Upcoming' : 'Outdated'}
                        </Badge>
                    </Group>
                </Accordion.Control>
                <Accordion.Panel>
                    {...listItems}
                </Accordion.Panel>
            </Accordion.Item>
        );
    });

    const date = new Date();

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? "light" : "dark"}>
            <Container my={'xl'}>
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
                    <Text c={'orange'} ta={'center'}>
                        Installing games to the NAND is currently broken, please do not use this method
                    </Text>
                    {/*<Flex align={'center'} justify={'center'}>
                            <Group ta={'center'}>
                                <Button component="a" href="https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.9/app-mainline-release.apk" color="green" radius={'xl'} variant="filled">Android</Button>
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
                                <Button color="blue" component="a" href="https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.8/sudachi-windows-v1.0.8.7z" radius={'xl'} variant="filled">Windows</Button>
                                <Button color="gray" component="a" href="https://drive.google.com/file/d/149zdnytWES7-2f8SpXuceVBz--xKgp2c/view?usp=sharing" radius={'xl'} variant="filled">Source Code</Button>
                            </Group>
                        </Flex>*/}
                    <Title order={2}>
                        Changes
                    </Title>
                    <Accordion radius={'lg'} variant="contained">
                        {items}
                    </Accordion>
                    <Text c={'red'}>
                        Please backup and delete all folders within the Sudachi directory, this will fix the downloadable content and updates issue
                    </Text>
                </Stack>
            </Container>
        </MantineProvider>
    );
}
