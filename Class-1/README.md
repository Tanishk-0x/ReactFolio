
# ----------- REACT FILE NOTATION ----------------------------

 index.JS = `first file he jo execute hogi .. jab page load hoga , react khud ka root banata he . root banane ke liye html se root element ko fetch krta he `
 package.json = `dependencies , script , versions hote he `
 Src = `is folder me { app.js , index.css , index.js } majority isi folder me work krenge `
 public > index.html  =  ` yha per root wala element pada hoga ` 
 index.css ------ `contains styling configuration for index.js` 
 App.js = ` jo bhi dikhane chahte he` 

# -----------------------------------------------------------

# JSX = `Html code inside javascript`

# -------------- RENDER IN REACT --------------------------

root.render (
    <component> </component>
); 

 render = `ek function he jo render ya show krne ke kaam aata he` ;  

# ------------ HOW TO CREATE AND EXPORT COMPONENT  ----------------

// component = ek piece of code he , same as functions , custom HTML elements create krne ke kaam aata he ... 

`-------------------------------------------`
function componentName () {
    return (
        // somethings 
    );
}

// -- exporting ---- 
`export default componentName ; `

// --- importing ------ 
` import './Style.css' ` // for css sheets 
` import Item from './Components/Item' ` // for js 

# -----------------------------------------------------------


# ------------------ PROPS IN REACT ----------------------
# (properties)
props = data ko store krne ke liye use krte he jise children kr through accessible kiya jaa sake 

function DummyButton (props) {
    const content = props.Text ; 
        return (
            <button> `{content}` </button>
        )
} ; 

// --- APP.JS ------- 
<DummyButton  Text = "___" >  </DummyButton>

>>> props ko object ya array format me bhi use kr sakte he <<<

const response = [

    {
        content : click me ; 
    }, 
    {
        content : submit ; 
    }

]; 

<DummyButton  Text = "{response[0].content}" >  </DummyButton>

# -----------------------------------------------------------

// custom elememt tags ke bich likha content ko visible kaise kre .. 

<customElement> inner content </customElement>

to visible the inner content == `{props.children}`
# -----------------------------------------------------------
