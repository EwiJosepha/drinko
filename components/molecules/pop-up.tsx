import React from 'react'

interface PopUp {
  onclose: () => void;
  children: React.ReactNode

}

const PopUpFn: React.FC<PopUp> = ({ onclose, children }) => {
return (
  <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-700 bg-opacity-50 z-50" onClick={onclose}>
            <div className="bg-white p-10 rounded-lg shadow-lg" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
  </>
)
}

export default PopUpFn