import ModalVideo from "modal-video"

import "modal-video/css/modal-video.min.css"
export const openModal = videoId => {
    console.log(`este es el video: ${videoId}`)
    const button = document.createElement("BUTTON")
    button.dataset.videoId = videoId
    new ModalVideo([button])
    button.click()
}