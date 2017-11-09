export function adminLoginAction(username) {
    return {
      type: 'ADMIN_LOGIN',
      username: username,
    }
  }