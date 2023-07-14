import { FC, PropsWithChildren } from 'react'
import { TEModal, TEModalBody, TEModalContent, TEModalDialog, TEModalHeader } from 'tw-elements-react'

type ModalWindowProps = PropsWithChildren & {
  showModal: boolean
  setShowModal: (v: boolean) => void
  title: string
}

const ModalWindow: FC<ModalWindowProps> = ({ showModal, setShowModal, children, title }) => {
  return (
    <TEModal show={showModal} staticBackdrop={true} setShow={setShowModal}>
      <TEModalDialog>
        <TEModalContent>
          <TEModalHeader>
            {/* <!--Modal title--> */}
            <h5 className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200">{title}</h5>
            {/* <!--Close button--> */}
            <button
              type="button"
              className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
              onClick={() => setShowModal(false)}
              aria-label="Close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
                className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </TEModalHeader>
          <TEModalBody>{children}</TEModalBody>
        </TEModalContent>
      </TEModalDialog>
    </TEModal>
  )
}

export default ModalWindow
