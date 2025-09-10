import { Container, Badge, Link, List, ListItem, Text } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { LockIcon } from '@chakra-ui/icons'

const Work = () => (
  <Layout title="Government Asset Information Management System">
    <Container>
      <Title>
        Government Asset Information Management System{' '}
        <Badge>2025 - current</Badge>
      </Title>
      <P>
        A platform for managing government asset information and documentation
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Text as="i" color="gray">
            Private <LockIcon mx="2px" />
          </Text>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Website</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>React, PostgreSQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/assets.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
