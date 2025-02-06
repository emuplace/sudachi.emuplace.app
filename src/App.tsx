import "@mantine/core/styles.css";
import {
    Accordion, Anchor, Badge, Button, Container,
    Flex,
    Group,
    List,
    MantineProvider,
    Space,
    Stack, Text, Title
} from "@mantine/core";
import { theme } from "./theme";

export default function App() {
    const changes = [
        {
            version: 'v1.0.14',
            sha: '6178075',
            isLatest: true,
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
        },
        {
            version: 'v1.0.13',
            sha: 'c5aff15',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    title: 'Changed mm:u to be more accurate to documentation',
                    subtitles: []
                },
                {
                    title: 'Removed ability to install games to the NAND',
                    subtitles: []
                }
            ],
            downloads: [
                {
                    color: 'green',
                    platform: 'Android',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.13/app-mainline-release.apk'
                },
                {
                    color: 'orange',
                    platform: 'Linux',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.13/sudachi-linux-v1.0.13.7z'
                },
                {
                    color: 'violet',
                    platform: 'macOS',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.13/sudachi-macos-v1.0.13.7z'
                },
                {
                    color: 'blue',
                    platform: 'Windows',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.13/sudachi-windows-v1.0.13.7z'
                },
                {
                    color: 'gray',
                    platform: 'Source Code',
                    url: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.13/latest.zip'
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
}
