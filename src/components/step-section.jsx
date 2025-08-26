

export function StepSection({ stepNumber, title, description, titleColor, reverse = false }) {
  const getStepImage = (step) => {
    switch (step) {
      case "1":
        return "Frame 35020.png"
      case "2":
        return "Frame 35025.png"
      case "3":
        return "Frame 35026.png"
      case "4":
        return "Frame 35027.png"
      default:
        return "Frame 35020.png"
    }
  }



  const textVariants = {
    hidden: { x: reverse ? 80 : -80, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, type: "spring", stiffness: 80 } },
  }

  const stepVariants = {
    hidden: { y: -5, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.2 } },
  }

  const titleVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.4 } },
  }

  const descriptionVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1, delay: 0.6 } },
  }

  return (
    <div
      className=" mb-15 relative overflow-hidden"
    >
      <div  className="bg-transparent max-w-2xl md:max-w-6xl mx-auto relative z-10">
        <div  className={` lg:grid lg:grid-cols-2   ${reverse ? "lg:grid-flow-col-dense" : ""}`}>
          <div
            
            className={`flex justify-center items-center ${reverse ? "lg:col-start-2" : ""}`}
          >
            <img
              src={getStepImage(stepNumber) || "/placeholder.svg"}
              alt={`Step ${stepNumber}: ${title}`}
              className="md:block lg:inline scale-60 lg:scale-100 p-3 lg:p-0"
            />
          </div>


          <div
            className={`p-2 lg:p-0 lg:mt-[124px] ${reverse ? "lg:col-start-1" : ""}`}
            variants={textVariants}
          >
            <div  className=" lg:text-left">
              <div
                className="font-normal text-sm leading-3 tracking-normal text-center"
                variants={stepVariants}
              >
                STEP {stepNumber} :
              </div>
              <div
                className={`mt-2 font-medium text-[31px] leading-[46px] tracking-[1px] custom-word-spacing text-center normal-case small-caps ${titleColor} `}
                variants={titleVariants}
              >
                {title}
              </div>
              <div
                className="mx-auto  lg:w-[490px] mt-4 font-normal text-base leading-6 tracking-normal text-center"
                variants={descriptionVariants}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}