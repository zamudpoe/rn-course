# React Native - La Guia Practica (Curso de Udemy)

## Configuracion Inicial
Esta configuracion se realiza con el siguiente ambiente de desarrollo:
* Equipo Macbook
* XCode instalado
* Android Studio instalado
* Node & NPM instalados


### Creacion de App React Native y Repositorio Github para control de cambios.
1. Creamos nuestra primera App de RN con el comando : ```create-react-native-app rn-course```

1. Creamos nuesro proyecto Github
   ```git
   git init
   git add .
   git status
   git commit -m "Primer Commit - Iniciando Repositorio"
   git status
   ```
1. Nos vamos a nuestra cuenta GitHub y creamos nuevo repositorio con nombre *rn-course* lo dejamos *publico*, y le damos click al boton de Create Repository

1. Subimos nuestro proyecto "*rn-course*" creado localmente a nuestro repositorio github *rn-course*:
    ```git
    git status
    git remote add origin https://github.com/tuusuario/rn-course.git
    git push -u origin master
    git status
    ```

---
## Ejecutando App en Modo desarrollo con Expo

1. Levantamos servidor expo
```npm run start ```
1. Descargamos la aplicacion Expo en nuestra dispositivo iOS y la abrimos , escaneamos el codigo QR
1. Pulsamos la tecla *i* para emulador iOS , ó *a* para emulador Android

Con esto ya podremos ver nuestra **Aplicacion Rect Native** ejecutandose en modo desarrollo en nuestro dispositivo, si realizamos cualquier cambio a nuestra archivo **App.js** se reflejara en automatico ya que esta en modo live reload.
  > NOTA: El archivo con el que iniciaremos nuestros pininos sera *App.js* , probemos con cambiar algo en el componente App ya sea agregandole estilos o modificando su codigo JSX, dichos cambios se reflejaran inmediatamente en nuestro dispositivo real , gracias a Expo.

---
## Temario del curso.

* Sección: 1 : 11 capitulos
  Getting Started
    1. Welcome!
    2. What is React Native?
    3. A Closer Look
    4. What Happens to JavaScript?
    5. Creating Our First React Native App
      fixing-setup-errors.pdf
    6. Dealing with Limitations of React Native
    7. What a Good Course Offers
    8. Course Requirements
    9. Course Outline
    10. How to get the Most out of This Course
    11. Useful Resources & Links

* Sección 2 Diving into the Basics: 29 Capitulos

    12. Module Introduction
    13. [ **ESTAMOS AQUI** ] Creating a New Project
      fixing-setup-errors.pdf
    14. JSX Elements you Can and Can't Use
    15. Ejecting from Create React Native App
    16. How to Use the Attached Code
    17. Running the App on an Android Simulator (+ Setup)
      fixing-adb-not-found.pdf
    18. Running our App on a Real Android Device
      turning-on-dev-mode.pdf
    19. Preparing XCode (for iOS)
    20. Running our App on an iOS Simulator
    21. Running our App on an iOS Device
    22. A Good Development Setup
    23. Working on the App: Adding a Textinput
    24. Styling - Understanding the Basics
      basics--01-first-elements.zip
    25. More on Flexbox
    26. Positioning Elements with Flexbox
      basics--02-basic-list.zip
    27. Adding a Button and Managing State
    28. Creating a Custom Component
      Tarea 1: Time to Practice - The Basics
    29. Listening to Touch Events
      basics--03-split-into-components.zip
    30. Reacting to Press Events
      basics--04-delete-items.zip
    31. Using a ScrollView
      basics--05-scrollview.zip
    32. Rendering Lists Correctly
      basics--06-flatlist.zip
    33. Adding Static Images
      beautiful-place.jpg
    34. Using Network Images
    35. Adding a Modal
      basics--08-modal.zip
    36. React vs React Native
    37. JavaScript - Supported Features
      basics-23-js-and-supported-features.mp4
    38. Wrap Up
      basics--09-finished.zip
    39. Useful Resources & Links
      basics--01-first-elements.zip
      basics--02-basic-list.zip
      basics--03-split-into-components.zip
      basics--04-delete-items.zip
      basics--05-scrollview.zip
      basics--06-flatlist.zip
      basics--07-images.zip
      basics--08-modal.zip
      basics--09-finished.zip

* Sección: 3 Using Redux with React Native: 9 Capitulos

    40. Module Introduction
    41. A Brief Redux Refresher
    42. Installing Redux and Creating a Basic Setup
    43. Setting Up Actions
    44. Setting Up the Reducer
    45. Creating the Store
    46. Connecting React Native to Redux
    47. Wrap Up
    48. Useful Resources & Links
      redux--01-finished.zip

* Sección: 4 Debugging React Native Apps : 7 Capitulos

    49. Module Introduction
    50. Using the Remote JavaScript Debugging console.log
    51. Debugging with Breakpoints
    52. Debugging+++ with React Native Debugger
    53. Debugging Redux
    54. Wrap Up
    55. Useful Resources & Links
      debugging--01-finished.zip


* Sección: 5 Linking and Using Third Party Libraries : 7 Capitulos

    56. Module Introduction
    57. Installing Libraries
    58. Automatic Linking
    59. Linking Libraries on iOS
    60. Linking Libraries on Android
    61. Using Library Features: Adding Icons
    62. Wrap Up
      3rd-party--01-finished.zip

* Sección: 6 Navigation in React Native Apps : 19 Capitulos

    63. Module Introduction
    64. Navigation in Web Apps vs Native Apps
    65. Exploring Native Navigation Solutions
    66. Adding React Native Navigation to iOS
    67. Adding React Native Navigation to Android
    68. Finishing the Library Setup
    69. Registering and Rendering a Screen
      navigation--01-auth-screen.zip
    70. Adding a Tabs Screen (Tabs Navigation)
    71. Adding Icons to Tabs
      navigation--02-tabs-with-icons.zip
    72. Connecting Screens to Redux
    73. Updating Redux
    74. Pushing Pages (Navigating "Forwards")
    75. Popping Pages (Navigating "Backwards")
    76. More Navigator Methods
      navigation--03-manage-places.zip
    77. Adding a Side Drawer
    78. Using Navigation Events & Toggling the Drawer
    79. Finishing the Drawer
      navigation--04-sidedrawer.zip
    80. Wrap Up
    81. Useful Resources & Links
      navigation--01-auth-screen.zip
      navigation--02-tabs-with-icons.zip
      navigation--03-manage-places.zip
      navigation--04-sidedrawer.zip

* Sección: 7 Styling & Animating React Native Apps (Correctly): 38 Capitulos

    82. Module Introduction
    83. Using StyleSheet vs Normal JS Objects
    84. Vanilla CS vs React Native Styles
    85. Flexbox in Action
      styling-animations--01-flexbox.zip
    86. Styling with Relative Units
    87. "Global Styles" with Custom Components
    88. Synthetic Cascading of Styles
    89. Styling Text
    90. Cascading Text Styles
      styling-animations--02-textinputs.zip
    91. Adding a Background Image
      background.jpg
    92. Creating a Re-Usable Custom Button
      styling-animations--03-finished-auth-screen.zip
    93. Editing the "Share Place" Screen
      styling-animations--04-share-place-no-split-up.zip
    94. Styling & Splitting the "Share Place" Screen
      styling-animations--05-share-place-split-up.zip
    95. Finishing the "Share Place" Screen
      styling-animations--06-share-place-finished.zip
    96. Your Challenge!
    97. Styling the Side Drawer
    98. Quick Bug Fix: PlaceInput Component
      styling-animations--07-styled-drawer.zip
    99. Intro: Cross Platform Styles & Responsiveness
    100. Cross-Platform Styling Made Easy!
    101. Using the Platform API
    102. Loading Different Icons for Different Platforms
    103. Using Different Entry Points (into the App)
    104. Cross-Platform UI Libraries
    105. The "Responsive Styling" Problem
    106. Responsive Design Solutions
    107. Using the Dimensions API
      styling-animations--08-bad-responsive-design.zip
    108. Adjusting Styles Dynamically (to changing Width / Height)
      styling-animations--09-bad-real-responsive-design.zip
    109. A Better Responsive Solution
      styling-animations--10-good-responsive-design.zip
    110. Bug Fix: Centering with Margins
    111. Cleaning Up Dimensions Listeners
      styling-animations--11-clean-up-listener.zip
      Tarea 2: Time to Practice - Responsive Designs
    112. Styling Navigation Items (react-native-navigation)
      styling-animations--13-navigation-styling.zip
    113. Preparing the App for Animations
    114. Using the Animated API
      styling-animations--14-finished-animation.zip
      Tarea 3: Time to Practice - Animations
    115. Animations Summary
    116. Wrap Up
    117. Useful Resources & Links
      styling-animations--01-flexbox.zip
      styling-animations--02-textinputs.zip
      styling-animations--03-finished-auth-screen.zip
      styling-animations--04-share-place-no-split-up.zip
      styling-animations--05-share-place-split-up.zip
      styling-animations--06-share-place-finished.zip
      styling-animations--07-styled-drawer.zip
      styling-animations--08-bad-responsive-design.zip
      styling-animations--09-bad-real-responsive-design.zip
      styling-animations--10-good-responsive-design.zip
      styling-animations--11-clean-up-listener.zip
      styling-animations--12-responsive-place-detail.zip
      styling-animations--13-navigation-styling.zip
      styling-animations--14-finished-animation.zip
      styling-animations--15-finished.zip

* Sección: 8 Handling User Input: 12 Capitulos

    118. Module Introduction
    119. Managing Input/ Control State
    120. Adding Custom Validation Logic
      form-input--01-input-handling-and-validation.zip
    121. Using the Validation State
      form-input--02-validation-feedback.zip
    122. Dispatching an Auth Action
    123. Switching Form (Auth) Modes
      form-input--03-login-signup-switch.zip
    124. Configuring Text Input Components
    125. Handling the Soft Keyboard
      form-input--04-handle-soft-keyboard.zip
    Tarea 4: Time to Practice - User Input
    126. Wrap Up
    127. KeyboardAvoidingView and ScrollView
    128. Useful Resources & Links
      form-input--01-input-handling-and-validation.zip
      form-input--02-validation-feedback.zip
      form-input--03-login-signup-switch.zip
      form-input--04-handle-soft-keyboard.zip
      form-input--05-finished.zip

* Sección: 9 Using Native Device Features - Maps, Camera & Image Gallery : 15 Capitulos

    129. Module Introduction
    130. Installing react-native-maps
    131. Rendering a Map
    132. Picking a Location on the Map
    133. Adding a Map Marker
      maps-camera--01-maps-and-marker.zip
    134. Animating Map Movement
      maps-camera--02-map-animation.zip
    135. Locating the User
      maps-camera--03-locate-user.zip
    136. Storing the Picked Location with Redux
      maps-camera--04-storing-locations.zip
      Tarea 5: Time to Practice - Maps
    137. Installing react-native-image-picker
    138. Using the Image Picker
    139. Storing the Picked Images
    140. Image Picker and the Data it Returns
      maps-camera--05-image-picker.zip
    141. Wrap Up
    142. Useful Resources & Links
      maps-camera--01-maps-and-marker.zip
      maps-camera--02-map-animation.zip
      maps-camera--03-locate-user.zip
      maps-camera--04-storing-locations.zip
      maps-camera--assignment-solution.zip
      maps-camera--05-image-picker.zip


* Sección: 10 Networking - Sending Http Requests : 16 Capitulos

    143. Module Introduction
    144. Sending Http Requests - Theory
    145. Creating the Server
    146. Using the Fetch-API
    147. Storing Data in Firebase
      http--01-store-data.zip
    148. Storing Images
    149. Finishing the Image Upload Function
      http--02-db-and-image-upload.zip
    150. Storing the Remaining Data
    151. Adding the Activity Indicator
    152. Handling Errors
    153. Http, fetch() and Error Handling
    154. Getting Data from the Server
      http--03-fetch-data.zip
    155. Fixing an Error
      Tarea 6: Time to Practice - Http
    156. Wrap Up
    157. Useful Resources & Links
      http--01-store-data.zip
      http--02-db-and-image-upload.zip
      http--03-fetch-data.zip
      http--04-delete-data.zip


* Sección: 11  Authentication in React Native Apps: 22 Capitulos

    158. Module Introduction
    159. How Authentication Works in React Native Apps
    160. Enabling Firebase Authentication
    161. Signing Users Up
      auth--01-signup.zip
    162. Using the Authentication Result (Response)
      auth--02-error-handling.zip
    163. Supporting Signup and Login
    164. Adding User Login
      auth--03-signin.zip
    165. Protecting Routes on Firebase
    166. Storing the Auth Token in Redux
      auth--04-store-token.zip
    167. Using the Auth Token
    168. Fetching the Token in a Re-Usable Way
      auth--05-fetch-token.zip
    169. Protecting the Firebase Cloudfunction
    170. Adding Places (Authenticated)
    171. Storing the Token in AsyncStorage
    172. Adding an Auto-Signin Functionality
      auth--06-auto-sign-in.zip
    173. Managing the Token Expiration
    174. Clearing the Auth Storage (AsyncStorage)
      auth--07-async-storage-after-clear.zip
    175. Refreshing the Token
      auth--08-refresh-token.zip
    176. Adding User Logout
    177. Refreshing the Token Without App Reloads
      auth--09-finished.zip
    178. Wrap Up
    179. Useful Resources & Links
      auth--01-signup.zip
      auth--02-error-handling.zip
      auth--03-signin.zip
      auth--04-store-token.zip
      auth--05-fetch-token.zip
      auth--06-auto-sign-in.zip
      auth--07-async-storage-after-clear.zip
      auth--08-refresh-token.zip
      auth--09-finished.zip

* Sección: 12 Polishing the App: 9 Capitulos

    180. Module Introduction
    181. Identifying "Improvement Potential"
    182. Shrinking Image Sizes
    183. Resetting the "Share Place" Screen
    184. Redirecting to Another Tab
      polish--01-reset-navigate-away.zip
    185. Loading Places All The Time!
    186. Improving Http Error Handling
    187. Cleaning Stored Images (on Firebase)
      polish--02-finished.zip
    188. Wrap Up
      polish--01-reset-navigate-away.zip
      polish--02-finished.zip

* Sección: 13 Publishing the App: 8 Capitulos

    189. Module Introduction
    190. Adding Launcher Icons
      icons.zip
    191. Adding a Splash Screen
    192. Configuring & Building the App
    193. Publishing to Google Play Store (Android)
    194. Publishing to the App Store (iOS)
    195. Publishing the App - Detailed Instructions
    196. Useful Resources & Links

* Sección: 14 : 1 Capitulo

  Round Up
