
export default function hola() {
  return 'hola'
}
/*
export const signIn = (data: UserLogin) => (dispatch: AppDispatch) => {
  dispatch(userLoading());
  signInWithEmailAndPassword(data.Password, data.Password)
  .then(async () => {
    dispatch(getUserData(false));
  }).catch(error => {
    switch (error.message) {
      case 'NotAuthorizedException':
        dispatch(userFailed('El correo o la contraseña no coinciden, por favor verifica los campos.'));
        break;
      case 'UserNotConfirmedException':
        dispatch(userFailed('Debes confirmar primero tu correo'));
        break;
      default:
        dispatch(userFailed(error.message));
        break;
    }
  });
}
*/
