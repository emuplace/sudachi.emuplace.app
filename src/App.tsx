import "@mantine/core/styles.css";
import {
    Accordion, Anchor, Badge, Button, Container,
    Flex, Group, List, MantineProvider,
    Space, Stack, Text, Title,
    VisuallyHidden
} from "@mantine/core";
import { theme } from "./theme";
import classes from './App.module.css';

export default function App() {
    const changes = [
        {
            text: 'v1.0.11',
            sha: '99775b8',
            isLatest: true,
            isUpcoming: false,
            details: [
                {
                    system: "Android",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.11/app-mainline-release.apk',
                    last: false,
                    items: [
                        {
                            primaryText: 'Added beginnings of Echoes of Wisdom audio fix',
                            secondaryText: 'Code is a reimplementation of Ryujinx\'s audio changes'
                        },
                        {
                            primaryText: 'Changed remaining main on-screen button colours',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Fixes an issue where some games won\'t boot from QLaunch',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Removed links to malicious domain',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Removed telemetry',
                            secondaryText: null
                        },
                    ]
                },
                {
                    system: "Linux",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.11/sudachi-linux-v1.0.11.7z',
                    last: false,
                    items: [
                        {
                            primaryText: 'Added beginnings of Echoes of Wisdom audio fix',
                            secondaryText: 'Code is a reimplementation of Ryujinx\'s audio changes'
                        },
                        {
                            primaryText: 'Added the ability to install games to the NAND',
                            secondaryText: 'Remove games from any added directories to stop duplicates'
                        },
                        {
                            primaryText: 'Added partial support for the MyPage (Profile) applet',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Added partial support for the Data Management settings',
                            secondaryText: 'App sizing is not 1:1 yet and only works with games installed to the NAND, deletion works but requires a restart'
                        },
                        {
                            primaryText: 'Fixes an issue where some games won\'t boot from QLaunch',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Removed links to malicious domain',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Removed telemetry',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Updated to Qt6, used similar CMake command as Windows',
                            secondaryText: null
                        }
                    ]
                },
                {
                    system: "Windows",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.11/sudachi-windows-v1.0.11.7z',
                    last: true,
                    items: [
                        {
                            primaryText: 'Added beginnings of Echoes of Wisdom audio fix',
                            secondaryText: 'Code is a reimplementation of Ryujinx\'s audio changes'
                        },
                        {
                            primaryText: 'Added the ability to install games to the NAND',
                            secondaryText: 'Remove games from any added directories to stop duplicates'
                        },
                        {
                            primaryText: 'Added partial support for the MyPage (Profile) applet',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Added partial support for the Data Management settings',
                            secondaryText: 'App sizing is not 1:1 yet and only works with games installed to the NAND, deletion works but requires a restart'
                        },
                        {
                            primaryText: 'Fixes an issue where some games won\'t boot from QLaunch',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Removed links to malicious domain',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Removed telemetry',
                            secondaryText: null
                        }
                    ]
                }
            ],
            url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.11/latest.zip'
        },
        {
            text: 'v1.0.10',
            sha: 'f2e32a9',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    system: "Android",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.10/app-mainline-release.apk',
                    last: false,
                    items: [
                        {
                            primaryText: 'Added some support for QLaunch (Home Menu) and added QLaunch option to Applet launcher submenu',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Improved accuracy of several IPC interface services',
                            secondaryText: null
                        }
                    ]
                },
                {
                    system: "Linux",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.10/sudachi-linux-v1.0.10.7z',
                    last: false,
                    items: [
                        {
                            primaryText: 'Added some support for QLaunch (Home Menu) and added QLaunch option to Tools submenu',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Improved accuracy of several IPC interface services',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Improved game library loading by using native C++ directory recursion',
                            secondaryText: null
                        }
                    ]
                },
                {
                    system: "Windows",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.10/sudachi-windows-v1.0.10.7z',
                    last: true,
                    items: [
                        {
                            primaryText: 'Added some support for QLaunch (Home Menu) and added QLaunch option to Tools submenu',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Improved accuracy of several IPC interface services',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Improved game library loading by using native C++ directory recursion',
                            secondaryText: null
                        }
                    ]
                }
            ],
            url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.10/latest.zip'
        },
        {
            text: 'v1.0.9',
            sha: 'e56a8a0',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    system: "Android",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.9/app-mainline-release.apk',
                    last: true,
                    items: [
                        {
                            primaryText: 'Added an additional page to the setup flow and button to the settings page allowing users to select a title.keys file',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Fixed an issue where the app would crash when installing a DLC or update',
                            secondaryText: 'Requires both prod.keys and title.keys'
                        }
                    ]
                }
            ],
            url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.9/latest.zip'
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
                        <Accordion classNames={classes} radius={'lg'} variant="contained">
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
