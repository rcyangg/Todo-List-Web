import { AppShell, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import TaskDashboard from '@/components/TaskDashboard';
import { TaskPageProvider } from '@/pages/TaskPage/TaskPageContextProvider';

export const TaskPage = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      data-testid="task-page"
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="xs" />
        <div>Logo</div>
      </AppShell.Header>

      <AppShell.Navbar p="md">Navbar</AppShell.Navbar>

      <AppShell.Main>
        <TaskPageProvider>
          <TaskDashboard />
        </TaskPageProvider>
      </AppShell.Main>
    </AppShell>
  );
};
