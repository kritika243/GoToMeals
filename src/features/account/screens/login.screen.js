import { Spacer } from '../../../components/spacer/spacer.component'
import { Text } from '../../../components/typography/text.component'
import { AccountBackground, AccountContainer, AuthButton, AuthInput } from "../components/account.styles"

import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import { useContext, useState } from 'react'

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error } = useContext(AuthenticationContext)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return <>
    <AccountBackground>
      <AccountContainer>

        <AuthInput label='E-mail' value={email} textContentType='emailAddress' keyboardType='email-address' autoCapitalize='none' onChangeText={(e) => setEmail(e)} />

        <Spacer size={'large'} >
          <AuthInput label='Password' value={password} textContentType='password'
            secureTextEntry autoCapitalize='none' secure onChangeText={(p) => setPassword(p)} />
        </Spacer>

        {
          error?.length && <Spacer size={'large'} >
            <Text variant='error' >{error}</Text>
          </Spacer>
        }

        <Spacer size={'large'} >
          <AuthButton icon="lock-open-outline" mode="contained" type='contained' onPress={() => onLogin(email, password)}>
            Login
          </AuthButton>
        </Spacer>

      </AccountContainer>
    </AccountBackground>
  </>
}