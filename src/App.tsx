import "@mantine/core/styles.css";
import {
    Accordion, Anchor, Badge, Button, Container,
    Flex, Group, List, MantineProvider,
    Space, Stack, Text, Title
} from "@mantine/core";
import { theme } from "./theme";
import classes from './App.module.css';

export default function App() {
    const changes = [
        {
            text: 'v1.0.9',
            sha: 'e56a8a0',
            isLatest: true,
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
            ]
        },
        {
            text: 'v1.0.8',
            sha: '450b52f',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    system: "Android",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.8/app-mainline-release.apk',
                    last: false,
                    items: [
                        {
                            primaryText: 'Improved memory accuracy and sizing',
                            secondaryText: null
                        }
                    ]
                },
                {
                    system: "Windows",
                    download: 'https://github.com/emuplace/sudachi.emuplace.app/releases/download/v1.0.8/sudachi-windows-v1.0.8.7z',
                    last: true,
                    items: [
                        {
                            primaryText: 'Improved memory accuracy and sizing',
                            secondaryText: null
                        }
                    ]
                }
            ]
        },
        {
            text: 'v1.0.7',
            sha: 'xxxxxxx',
            isLatest: false,
            isUpcoming: false,
            details: [
                {
                    system: 'Windows',
                    download: '',
                    last: true,
                    items: [
                        {
                            primaryText: 'Fixed an issue in Super Bomberman R 2 that caused the game to not boot due to an error in the Friend service',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Fixed an issue in Animal Well that caused the game to not boot due to the audio core revision number being too low',
                            secondaryText: null
                        },
                        {
                            primaryText: 'Fixed an issue in Princess Peach: Showtime! that caused the game to run into a black screen',
                            secondaryText: 'Please be aware this fix is not complete and Princess Peach: Showtime! will still drop to 0fps occasionally'
                        },
                        {
                            primaryText: 'Fixed an issue in Paper Mario: The Thousand Year Door that caused the sewers to be black when using an AMD graphics card',
                            secondaryText: 'Thank you to Ryujinx for the pointer towards LogicOp'
                        }
                    ]
                }
            ]
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
                        <Accordion classNames={classes} defaultValue={changes[0].text} radius={'lg'} variant="contained">
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
