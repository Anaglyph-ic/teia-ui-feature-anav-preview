import React from 'react'
import { Page, Container } from '@atoms/layout'
import styles from '@style'
import Markdown from 'markdown-to-jsx'
import raw from 'raw.macro'

const content = raw('../../lang/en/about.md')

export function About() {
  return (
    <Page title="about" large>
      <Container>
        <Markdown
          options={{
            overrides: {
              hr: {
                props: {
                  className: styles.spacer,
                },
              },
            },
          }}
          className={styles.about}
        >
          {content}
        </Markdown>
      </Container>
    </Page>
  )
}