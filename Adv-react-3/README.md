
### 

<!--* Slices = Portion of Data  -->
<!--* centralised store = slice + slice + slice -->
<!--^ Reducers = matlab Functi

//----------- concept of slices ------------- 
// -------- createSlice() function ---------
<!--~ createSlice() ek object leta he jisme minimum 3 chije hoti he  -->
<!--? 1 = name  -->
<!--? 2 = initialState  -->
<!--? 3 = reducers = ( functionality ) -->

<!--!------------------------------------------- -->

    const initialState = {
        value : 0 ,
    }


    export const CounterSlice = createSlice(
        {
            name : "counter" , 
            initialState , 

            Reducers: {
                increment: (state) => {
                    state.value += 1 ; 
                },
                decrement: (state) => {
                    state.value -= 1 ; 
                }
            }

        }
    )

    <!--! increment and decrement is a reducer function agar inko slice me se bahar nikalna he to action creater ki mdada se hi nikal sakte he  -->

    <!--* export krna padega functionslity ko action ki madad se  -->

    <!--~ ----- destructuring ----- -->
    export const  { increment , decrement } = CounterSlice.actions ; 

    <!--~ ----- exporting ----------  -->
    export default CounterSlice.reducers ; 



<!--!------------------------------------------- -->
### Store 

<!--* Store = ek centralised entity he / global state he pure project ki  -->
<!--^ store me sari ki sari states save hogi in the form of Slices  -->

export const store = configureStore({
    reducers : {
        <!-- name : counterSlice , // ek slice  -->
    }
})

// centralised store multiple slices se banti he 


<!--!------------------------------------------- -->

### Link react with redux 

<!-- // How to link React code with Redux code  -->

    ReactCode ------> Link ---------> ReduxCode = <PROVIDER/>

    <!--~ provider ki madad se link krte he react code ko redux code se  -->


<!--!------------------------------------------- -->

### UseSelector() Hook 

<!--^  useSelector Hook = kisi slice me se particular value ko fetch krne ke liye ya kisi slice me se data ko fetch krne ke liye useSelector() Hook ka use krte he  -->


const count = useSelector( (itr) => itr.name.jo_fetch_krna_he )


<!--!------------------------------------------- -->

### useDispatch() Hook 

<!--^ useDispatch Hook = functions ko Access kene ke liye useDispatch() Hook ka use krte he  -->

const dispatch = useDispatch() ; 
