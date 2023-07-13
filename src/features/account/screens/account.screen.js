import { AccountBackground, AccountContainer, AuthButton } from "../components/account.styles"

export const AccountScreen = () => {
  return <>
    <AccountBackground>
      <AccountContainer>
        <AuthButton title='Login' />
      </AccountContainer>
    </AccountBackground>
  </>
}