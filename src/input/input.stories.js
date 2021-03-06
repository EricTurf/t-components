import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

import Input from './index';

function InputField({ children }) {
    const [value, setValue] = useState('');
    return children({ value, setValue });
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
`;

const Wrapper = styled.div`
    width: 300px;
    margin: 10px;
    background-color: white;
`;

const BackgroundWrapper = styled.div`
    background-color: pink;
    padding: 2rem;
`;

storiesOf('Inputs', module)
    .add('With Background', () => (
        <BackgroundWrapper>
            <InputField>
                {({ value, setValue }) => (
                    <Input
                        label="Random Field"
                        value={value}
                        onChange={setValue}
                        onBlur={action('Blur')}
                    />
                )}
            </InputField>
        </BackgroundWrapper>
    ))
    .add('Normal', () => (
        <Main>
            <Wrapper>
                Normal
                <InputField>
                    {({ value, setValue }) => (
                        <Input
                            label="Name"
                            value={value}
                            onChange={setValue}
                            onBlur={action('Blur')}
                        />
                    )}
                </InputField>
            </Wrapper>
            <Wrapper>
                Icon
                <InputField>
                    {({ value, setValue }) => (
                        <Input
                            label="Name"
                            value={value}
                            onChange={setValue}
                            icon="lock"
                            onIconClick={action('Clicked on Icon')}
                        />
                    )}
                </InputField>
            </Wrapper>
            <Wrapper>
                Hint Text
                <InputField>
                    {({ value, setValue }) => (
                        <Input
                            label="Name"
                            value={value}
                            onChange={setValue}
                            hintText="Something you do"
                        />
                    )}
                </InputField>
            </Wrapper>
            <Wrapper>
                Hint Text and Error
                <InputField>
                    {({ value, setValue }) => (
                        <Input
                            label="Name"
                            value={value}
                            onChange={setValue}
                            hintText="Something you do"
                            error="WRONG"
                        />
                    )}
                </InputField>
            </Wrapper>
            <Wrapper>
                Disabled
                <InputField>
                    {({ value, setValue }) => (
                        <Input
                            label="Name"
                            value={value}
                            onChange={setValue}
                            disabled
                        />
                    )}
                </InputField>
            </Wrapper>
            <Wrapper>
                Read only
                <InputField>
                    {() => (
                        <Input
                            label="Name"
                            readOnly
                            value="Some Value"
                            onChange={() => null}
                        />
                    )}
                </InputField>
            </Wrapper>
            <Wrapper>
                Read only + Icon
                <InputField>
                    {() => (
                        <Input
                            label="Name"
                            readOnly
                            value="Some Value"
                            onChange={() => null}
                            icon="lock"
                        />
                    )}
                </InputField>
            </Wrapper>
            <Wrapper>
                Error
                <InputField>
                    {({ value, setValue }) => (
                        <Input
                            label="Name"
                            value={value}
                            onChange={setValue}
                            error="You have an error"
                        />
                    )}
                </InputField>
            </Wrapper>
            <Wrapper>
                Error and Disabled
                <InputField>
                    {({ value, setValue }) => (
                        <Input
                            label="Name"
                            value={value}
                            onChange={setValue}
                            disabled
                            error="You have an error"
                        />
                    )}
                </InputField>
            </Wrapper>
        </Main>
    ));
