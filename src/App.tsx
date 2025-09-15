import "@mantine/core/styles.css";
import {
    Container,
    Flex,
    MantineProvider,
    Title,
    Text,
    Stack,
    Anchor
} from "@mantine/core";
import { theme } from "./theme";

export default function App() {
    /*
    const changes = [
        {
            text: 'Latest Changes',
            secondaryText: 'Updated 2nd July 2025',
            details: [
                {
                    header: 'Added',
                    items: [
                        {
                            title: 'Added missing functions to IAudioController to include FW 19.0.0+ support',
                            subtitle: ''
                        },
                        {
                            title: 'Added missing functions to IParentalControlService to include FW 18.0.0+ support',
                            subtitle: ''
                        },
                        {
                            title: 'Added missing functions to IProfile and IProfileEditor to include FW 15.0.0 and 18.0.0+ support',
                            subtitle: ''
                        }
                    ]
                },
                {
                    header: 'Changed',
                    items: []
                },
                {
                    header: 'Deprecated',
                    items: []
                },
                {
                    header: 'Fixed',
                    items: []
                },
                {
                    header: 'Removed',
                    items: []
                },
                {
                    header: 'Security',
                    items: []
                }
            ]
        },
        {
            text: 'Older Changes',
            secondaryText: 'Updated 20th June 2025',
            details: [
                {
                    header: 'Added',
                    items: [
                        {
                            title: 'Added missing master_key_* identifiers from 0x0B to 0x13 to include FW 18.0.0+ support',
                            subtitle: ''
                        },
                        {
                            title: 'Added AliasRegionExtraSize to Kernel, ProgramMetadata and SVC to include FW 18.0.0+ support',
                            subtitle: ''
                        }
                    ]
                },
                {
                    header: 'Changed',
                    items: [
                        {
                            title: 'Rewrote the AppletAE, MM:U and NVMEMP services to improve accuracy',
                            subtitle: ''
                        },
                        {
                            title: 'Rewrote the RawNACP structure to improve accuracy and include FW 20.0.0+ support',
                            subtitle: ''
                        }
                    ]
                },
                {
                    header: 'Deprecated',
                    items: []
                },
                {
                    header: 'Fixed',
                    items: [
                        {
                            title: 'Fixed compilation errors and issues with Mbed-TLS',
                            subtitle: ''
                        }
                    ]
                },
                {
                    header: 'Removed',
                    items: []
                },
                {
                    header: 'Security',
                    items: []
                }
            ]
        }
    ]

    const items = changes.map((item) => {
        return (
            <Accordion.Item key={item.text} value={item.text}>
                <Accordion.Control>
                    <Group justify={'space-between'} mr={'sm'}>
                        <Text>
                            {item.text}
                        </Text>
                        <Text c={'dimmed'}>
                            {item.secondaryText}
                        </Text>
                    </Group>
                </Accordion.Control>
                <Accordion.Panel mr={'md'}>
                    {
                        item.details.map((detail, index) => (
                            <>
                                <Title order={2}>
                                    {detail.header}
                                </Title>
                                <List>
                                    {
                                        detail.items.length == 0 ? (
                                            <Text c={'dimmed'}>Unchanged</Text>
                                        ) : (
                                            detail.items.map((item) => (
                                                <List.Item>
                                                    <Text c={'dimmed'}>
                                                        {item.title}
                                                    </Text>
                                                </List.Item>
                                            ))
                                        )
                                    }
                                </List>
                                <Space h={index == item.details.length - 1 ? 0 : 'md'} />
                            </>
                        ))
                    }
                </Accordion.Panel>
            </Accordion.Item>
        )
    })
        */

    const date = new Date()

    return (
        <MantineProvider theme={theme} forceColorScheme={date.getHours() >= 7 && date.getHours() <= 19 ? 'light' : 'dark'}>
            <Container>
                <Flex align={'center'} mih={'100vh'} justify={'center'}>
                    <Stack>
                        <Anchor href='https://twitter.com/getsudachiemu' target={'_blank'}>
                            <Text c={theme.primaryColor} ta={'center'}>
                                @getsudachiemu
                            </Text>
                        </Anchor>
                        <Title order={1} ta={'center'}>
                            Development Postponed
                        </Title>
                        <Flex align={'center'} gap={'xs'} justify={'center'}>
                            <Text c={'dimmed'}>
                                Check out
                            </Text>
                            <Anchor href='https://folium.emuplace.app' target={'_blank'}>
                                <Text c={theme.primaryColor} ta={'center'}>
                                    Folium
                                </Text>
                            </Anchor>
                            <Text c={'dimmed'}>
                                for iPad and iPhone
                            </Text>
                        </Flex>
                    </Stack>
                    {/*
                <Stack>
                    <Anchor href='https://twitter.com/getsudachiemu' target={'_blank'}>
                        <Text c={theme.primaryColor} ta={'center'}>
                            @getsudachiemu
                        </Text>
                    </Anchor>
                    <Title order={1} ta={'center'}>
                        Sudachi, a Nintendo Switch emulator
                    </Title>
                    <Center>
                        <Badge variant={'dot'}>
                            #a-new-beginning
                        </Badge>
                    </Center>
                    <Text c={'dimmed'} ta={'center'}>
                        Nintendo Switch emulation focusing on accuracy, performance and support
                    </Text>
                    <Space h={'md'} />
                    <Accordion radius={'lg'} variant={'contained'}>
                        {items}
                    </Accordion>
                </Stack>
                */}
                </Flex>
            </Container>
        </MantineProvider>
    )
}

/*export default function App() {
    const changes = [
        {
            version: 'v1.0.15',
            sha: 'c7431bd',
            isLatest: true,
            isUpcoming: false,
            details: [
                {
                    title: 'Added support for XCX:DE by stubbing ssl:s',
                    subtitles: [
                        'Currently the menu and a small section of the game has been tested'
                    ]
                },
                {
                    title: 'Changed how MoltenVK is obtained for macOS to get newer versions',
                    subtitles: [
                        'Artifacts are now used which can now be updated more frequently'
                    ]
                },
                {
                    title: 'Changed from SDL2 to SDL3 bringing over its improvements',
                    subtitles: []
                },
                {
                    title: 'Fixed issues related to caps by reverting the rewrite temporarily',
                    subtitles: []
                },
                {
                    title: 'Fixed several compilation errors on macOS',
                    subtitles: []
                },
                {
                    title: 'Updated vcpkg to the latest version',
                    subtitles: []
                },
            ],
            downloads: [
                {
                    color: 'green',
                    platform: 'Android',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.15/app-mainline-release.apk'
                },
                {
                    color: 'orange',
                    platform: 'Linux',
                    url: ''
                },
                {
                    color: 'violet',
                    platform: 'macOS',
                    url: ''
                },
                {
                    color: 'blue',
                    platform: 'Windows',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.15/sudachi-windows-v1.0.15.7z'
                },
                {
                    color: 'gray',
                    platform: 'Source Code',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.15/latest.zip'
                }
            ]
        },
        {
            version: 'v1.0.14',
            sha: '6178075',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    title: 'Added support for booting the initial setup screen via -setup',
                    subtitles: [
                        'Only available on Linux, macOS and Windows via Terminal or Tools > Open Initial Setup',
                        'Only partial support for now, will be improved in the future'
                    ]
                },
                {
                    title: 'Added several missing functions to allow the initial setup screen to be launched',
                    subtitles: [
                        'Fixes an issue where some newer games would not boot'
                    ]
                },
                {
                    title: 'Fixed an issue with mm:u where Get and GetOld would not return after pushing a found session\'s minimum value',
                    subtitles: []
                },
                {
                    title: 'Started rewrite of caps, caps:a and caps:su to improve accuracy',
                    subtitles: []
                }
            ],
            downloads: [
                {
                    color: 'green',
                    platform: 'Android',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.14/app-mainline-release.apk'
                },
                {
                    color: 'orange',
                    platform: 'Linux',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.14/sudachi-linux-v1.0.14.7z'
                },
                {
                    color: 'violet',
                    platform: 'macOS',
                    url: ''
                },
                {
                    color: 'blue',
                    platform: 'Windows',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.14/sudachi-windows-v1.0.14.7z'
                },
                {
                    color: 'gray',
                    platform: 'Source Code',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.14/latest.zip'
                }
            ]
        }
    ]

    const items = changes.map((item) => {
        return (
            <Accordion.Item key={item.version} value={item.version}>
                <Accordion.Control>
                    <Group justify='space-between' pr={'md'}>
                        <Group gap={'sm'}>
                            <Text>
                                {item.version}
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
                    <List>
                        {item.details.map((detail) => (
                            <List.Item>
                                <Text>
                                    {detail.title}
                                </Text>
                                <List>
                                    {detail.subtitles.map((subtitle) => (
                                        <List.Item>
                                            <Text c={'dimmed'} size="sm">
                                                {subtitle}
                                            </Text>
                                        </List.Item>
                                    ))}
                                </List>
                            </List.Item>
                        ))}
                    </List>
                    <Space h={'md'} />
                    <Flex gap={'md'} wrap={'wrap'} justify="flex-start"
                        align="flex-start">
                        {item.downloads.map((download) => (
                            <Button color={download.color} radius={'md'} component="a" disabled={download.url == '' || download.url == null} href={download.url}>
                                {download.platform}
                            </Button>
                        ))}
                    </Flex>
                </Accordion.Panel>
            </Accordion.Item>
        )
    })

    const date = new Date()

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
                    <Title order={2}>
                        Changes
                    </Title>
                    <Accordion radius={'lg'} variant="contained">
                        {items}
                    </Accordion>
                </Stack>
            </Container>
        </MantineProvider>
    )
}*/