const INITIAL_STATE = {
    menuitems: [
        {
          id: "azxc",
          itemName: "Books",
          imageSrc: "",
        },
        {
          id: "abxc",
          itemName: "Computers",
          imageSrc: "",
        },
        {
          id: "acxc",
          itemName: "Mobiles",
          imageSrc: '',
        },
        {
          id: "adxc",
          itemName: "Men's Fashion",
          imageSrc: 'https://i.ibb.co/cvpntL1/hats.png',
        },
        {
          id: "aexc",
          itemName: "Womens's Fashion",
          imageSrc: "",
        },
        {
          id: "afxc",
          itemName: "Girl's Fashion",
          imageSrc: "",
        },
      ]
}
const homeReducer = (state = INITIAL_STATE, { type, payload}) => {
    switch(type){
        default:
            return state;
    }
}

export { homeReducer };