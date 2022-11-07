function getVideo(subscriptionStatus) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (subscriptionStatus === "VIP") {
                resolve("show video")
            }
            else if (subscriptionStatus === "FREE") {
                resolve("show trailer")
            }
            else{
                reject("no video")
            }
        }, 2000)
    })
}

// 2. Async/Await
async function getSubPromise() {
    const status = (await getSubStatus())
    subRef.innerHTML = status
    // VIP
}
console.log(getVideo())