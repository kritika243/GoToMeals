import { Spacer } from '../../../components/spacer/spacer.component'
import { AccountBackground, AccountContainer, AuthButton } from "../components/account.styles"

export const AccountScreen = ({ navigation }) => {
  return <>
    <AccountBackground>
      <AccountContainer>
        <AuthButton icon="lock-open-outline" mode="contained" type='contained' onPress={() => navigation.navigate('Login')} >
          Login
        </AuthButton>
        <Spacer size={'large'} >
          <AuthButton icon="lock-open-outline" mode="contained" type='contained' onPress={() => navigation.navigate('Register')}>
            Sign Up
          </AuthButton>
        </Spacer>
      </AccountContainer>
    </AccountBackground>
  </>
}