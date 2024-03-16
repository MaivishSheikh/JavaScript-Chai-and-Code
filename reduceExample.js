let shoppingCart = [
        {
                itemName: "JavaScript course",
                        price: 2999
                            },
                                {
                                        itemName: "Python course",
                                                price: 999
                                                    },
                                                        {
                                                                itemName: "Data Science course",
                                                                        price: 12999
                                                                            }
                                                                            ]

                                                                            let myTotal = shoppingCart.reduce( (acc, item) => {
                                                                                console.log(`acc: ${acc} and curr: ${item.price}`)
                                                                                    return acc + item.price
                                                                                    }, 0)

                                                                                    console.log(myTotal)
