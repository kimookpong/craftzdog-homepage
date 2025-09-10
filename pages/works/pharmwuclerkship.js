import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Pharmacy WU Clerkship">
    <Container>
      <Title>
        Pharmacy WU Clerkship <Badge>2025 - current</Badge>
      </Title>
      <P>
        A platform for managing pharmacy clerkship programs at Walailak
        University
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.pharmwuclerkship.com/" isExternal>
            https://www.pharmwuclerkship.com/ <ExternalLinkIcon mx="2px" />
          </Link>
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

      <WorkImage src="/images/works/pharmwuclerkship.png" alt="Inkdrop" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
