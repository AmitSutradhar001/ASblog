import { TextInput } from "flowbite-react";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { ToastContainer, toast } from "react-toastify";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase.js";
const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user.user);
  const [imageFile, setImageFile] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
  const [imageFileUploadingProgress, setImageFileUploadingProgress] =
    useState(null);
  const filePick = useRef();

  const handleImgChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageFileUrl(URL.createObjectURL(file));
    }
  };
  useEffect(() => {
    if (imageFile) {
      uploadImage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageFile]);

  const uploadImage = async () => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageFileUploadingProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadingProgress(null);
        setImageFile(null);
        setImageFileUrl(null);
        if (error.status === 403) {
          toast.error("Only image is accepted!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        } else {
          toast.error(error.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setImageFileUrl(downloadUrl);
        });
      }
    );
  };

  return (
    <>
      <ToastContainer style={{ top: "50px" }} />
      <div className="max-w-lg mx-auto p-3 w-full">
        <h2 className="my-7 text-center font-semibold text-3xl">Profile</h2>
        <form className="flex flex-col gap-5">
          <input
            type="file"
            ref={filePick}
            accept="image/.*"
            onChange={handleImgChange}
            hidden
          />
          <div
            className="w-32 h-32 self-center cursor-pointer relative shadow-md rounded-full overflow-hidden"
            onClick={() => filePick.current.click()}
          >
            {imageFileUploadingProgress && (
              <CircularProgressbar
                value={imageFileUploadingProgress || 0}
                text={`${imageFileUploadingProgress}%`}
                strokeWidth={4}
                styles={{
                  root: {
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                  },
                  path: {
                    stroke: `rgba(62, 152, 199, ${
                      imageFileUploadingProgress / 100
                    })`,
                  },
                }}
              />
            )}
            <img
              src={imageFileUrl || currentUser.user.profilePicture}
              alt="user pic"
              className={`rounded-full w-full h-full object-cover border-8 dark:border-green-400 ${
                imageFileUploadingProgress &&
                imageFileUploadingProgress < 100 &&
                "opacity-60"
              }`}
            />
          </div>
          <TextInput
            type="text"
            id="username"
            placeholder="username"
            defaultValue={currentUser.user.username}
          />
          <TextInput
            type="email"
            id="email"
            placeholder="email"
            defaultValue={currentUser.user.email}
          />
          <TextInput type="password" id="password" placeholder="password" />
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 w-full bg-white dark:text-white dark:bg-gray-700 rounded-md group-hover:bg-opacity-0">
              Update
            </span>
          </button>
        </form>
        <div className="flex justify-between text-red-500 items-center flex-wrap py-1">
          <h3>Delete Account</h3>
          <h3>Sign Out</h3>
        </div>
      </div>
    </>
  );
};

export default DashProfile;
