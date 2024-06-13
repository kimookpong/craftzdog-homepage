import { Container, Badge, List, ListItem, Text } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import { LockIcon } from '@chakra-ui/icons'

import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="Wanderwoods POS">
    <Container>
      <Title>
        Wanderwoods POS <Badge>2024</Badge>
      </Title>
      <P>Point of Sale (POS) for big restaurant</P>
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
          <span>PHP, mySQL</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/wdw_pos.png" alt="WdwPOS" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
