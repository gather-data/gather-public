import React from 'react';
import styled from 'styled-components';
import { colors, p, ph, Flex, Link, transition } from 'gather-style';
import Prism from 'prismjs';

interface CodeSample {
  language: string;
  code: string;
  title: string;
}

interface Props {
  codeSamples: CodeSample[];
}

const Container = styled.div`
  height: 420px;
  width: 100%;
`;

const CodeContainer = styled.div`
  background: rgba(0, 0, 0, 0.35);
  box-shadow: inset 0 12px 24px 0 rgba(0, 0, 0, 0.1),
    inset 0 1px 3px 0 rgba(0, 0, 0, 0.02);
  border-radius: 8px;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

interface CodeSamplesProps {
  left: string;
  codeSamples: CodeSample[];
}

const CodeSamples = styled.div<CodeSamplesProps>`
  display: flex;
  position: absolute;
  left: ${props => props.left};
  width: ${props => props.codeSamples.length * 100}%;
  top: 0;
  bottom: 0;

  ${transition(['left'], '0.48s')};
`;

const CodeBlock = styled.pre`
  background: none !important;
  padding: 24px !important;
  margin: 0 !important;
  flex: 1;
  overflow: scroll;

  code {
    background: none;
  }
`;

class CodeSwiper extends React.Component<Props> {
  state = {
    selectedIndex: 0,
  };

  onClick = (sample: CodeSample) => {
    const { codeSamples } = this.props;
    const newIndex = codeSamples.findIndex(s => s.title === sample.title);

    this.setState({ selectedIndex: newIndex });
  };

  render() {
    const { selectedIndex } = this.state;
    const { codeSamples } = this.props;

    return (
      <Container>
        <Flex>
          {codeSamples.map((sample, index) => (
            <Link
              mb={2}
              heavy
              onClick={() => this.onClick(sample)}
              color={index === selectedIndex ? colors.white : colors.white60}
              ml={3}
              useReachRouter
            >
              {sample.title}
            </Link>
          ))}
        </Flex>
        <CodeContainer>
          <CodeSamples
            codeSamples={codeSamples}
            left={`calc(${-selectedIndex * 100}%)`}
          >
            {codeSamples.map(sample => (
              <CodeBlock>
                <code
                  className={`language-${sample.language}`}
                  dangerouslySetInnerHTML={{
                    __html: Prism.highlight(
                      sample.code,
                      Prism.languages[sample.language],
                      sample.language
                    ),
                  }}
                />
              </CodeBlock>
            ))}
          </CodeSamples>
        </CodeContainer>
      </Container>
    );
  }
}

export default CodeSwiper;
