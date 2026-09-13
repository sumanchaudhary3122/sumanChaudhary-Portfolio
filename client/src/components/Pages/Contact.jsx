import {
  Mail,
  MapPin,
  MoveRight,
  MoveUpRight,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const Contact = () => {
  const [fullName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [profileImage, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Create preview URL when image changes
  useEffect(() => {
    if (!profileImage) {
      setImagePreview(null);
      return;
    }

    const previewUrl = URL.createObjectURL(profileImage);
    setImagePreview(previewUrl);

    // Cleanup object URL
    return () => URL.revokeObjectURL(previewUrl);
  }, [profileImage]);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    // Validate file type
    const allowedTypes = ["image/png", "image/jpeg", "image/webp"];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Please select a PNG, JPG or WEBP image");
      return;
    }

    // Validate file size - 5MB
    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size must be less than 5MB");
      return;
    }

    setImage(file);
  };

  const removeImage = () => {
    setImage(null);
    setImagePreview(null);

    // Reset file input
    const fileInput = document.getElementById("profile-image");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      const formData = new FormData();

      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("description", description);
      formData.append("location", location);
      formData.append("phone", phone);

      if (profileImage) {
        formData.append("profileImage", profileImage);
      }

      const response = await fetch("http://localhost:8000/public/user", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error:${response.status}`);
      }

      const responseData = await response.json();

      console.log("responseData:", responseData);

      setName("");
      setEmail("");
      setDescription("");
      setLocation("");
      setPhone("");
      setImage(null);
      setImagePreview(null);

      const fileInput = document.getElementById("profile-image");
      if (fileInput) {
        fileInput.value = "";
      }

      toast.success("Message sent Successfully!");
    } catch (error) {
      console.log(error.message);
      toast.error("Failed to send Message");
    }
  };

  return (
    <div className="min-h-screen text-center px-4 py-10 sm:py-12 md:px-8 lg:px-12 xl:px-20">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Contact <span className="text-violet-600">ME</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 mt-8 lg:mt-10 w-full">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col gap-3 p-4 sm:p-5 md:p-6
          rounded-xl
          bg-white/60 backdrop-blur-xl
          border border-white/80
          shadow-[0_20px_50px_-25px_rgba(60,45,140,0.35)]"
        >
          <input
            onChange={(e) => setName(e.target.value)}
            value={fullName}
            className="w-full h-12 rounded-xl px-4
            text-gray-900
            bg-white/70
            border border-gray-200
            placeholder:text-gray-400
            focus:outline-none
            focus:border-violet-600
            focus:ring-4 focus:ring-violet-600/12
            transition-all"
            type="text"
            placeholder="Enter your name"
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full h-12 rounded-xl px-4
            text-gray-900
            bg-white/70
            border border-gray-200
            placeholder:text-gray-400
            focus:outline-none
            focus:border-violet-600
            focus:ring-4 focus:ring-violet-600/12
            transition-all"
            type="email"
            placeholder="Enter your email"
          />

          <input
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            className="w-full h-12 rounded-xl px-4
            text-gray-900
            bg-white/70
            border border-gray-200
            placeholder:text-gray-400
            focus:outline-none
            focus:border-violet-600
            focus:ring-4 focus:ring-violet-600/12
            transition-all"
            type="tel"
            placeholder="Enter your Phone number"
          />

          <input
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            className="w-full h-12 rounded-xl px-4
            text-gray-900
            bg-white/70
            border border-gray-200
            placeholder:text-gray-400
            focus:outline-none
            focus:border-violet-600
            focus:ring-4 focus:ring-violet-600/12
            transition-all"
            type="text"
            placeholder="Enter your location"
          />

          {/* IMAGE UPLOAD + PREVIEW */}
          <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Profile Image
            </label>

            {!imagePreview ? (
              <label
                htmlFor="profile-image"
                className="group relative flex flex-col items-center justify-center
                w-full min-h-52
                rounded-2xl
                border-2 border-dashed border-gray-300
                bg-linear-to-br from-violet-50 via-white to-purple-50
                hover:border-violet-500 hover:bg-violet-50/50
                cursor-pointer
                transition-all duration-300"
              >
                <input
                  id="profile-image"
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />

                <div className="flex flex-col items-center text-center px-6">
                  <div
                    className="w-16 h-16 mb-4 rounded-2xl
                    flex items-center justify-center
                    bg-violet-100 text-violet-600
                    group-hover:scale-110
                    transition-transform duration-300"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                        d="M3 16.5V19a2 2 0 002 2h14a2 2 0 002-2v-2.5M16 8l-4-4m0 0L8 8m4-4v12"
                      />
                    </svg>
                  </div>

                  <p className="text-sm font-semibold text-gray-800">
                    Upload your profile image
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    PNG, JPG or WEBP · Max 5MB
                  </p>

                  <span
                    className="mt-4 inline-flex items-center px-4 py-2
                    rounded-lg
                    bg-violet-600
                    text-white text-sm font-medium
                    shadow-sm
                    group-hover:bg-violet-700
                    transition-colors"
                  >
                    Choose Image
                  </span>
                </div>
              </label>
            ) : (
              /* IMAGE PREVIEW */
              <div
                className="relative w-full h-64 rounded-2xl overflow-hidden
                border-2 border-violet-200
                bg-gray-100
                shadow-md"
              >
                <img
                  src={imagePreview}
                  alt="Selected profile preview"
                  className="w-full h-full object-cover"
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/20" />

                {/* Image name */}
                <div
                  className="absolute bottom-3 left-3 right-3
                  flex items-center justify-between
                  gap-3"
                >
                  <div
                    className="min-w-0 px-3 py-2 rounded-lg
                    bg-black/60 backdrop-blur-sm text-white"
                  >
                    <p className="text-xs font-medium truncate">
                      {profileImage?.name}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={removeImage}
                    className="shrink-0 w-9 h-9
                    flex items-center justify-center
                    rounded-full
                    bg-red-500 text-white
                    hover:bg-red-600
                    shadow-lg
                    transition-colors"
                    title="Remove image"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}
          </div>

          <textarea
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="w-full min-h-32 sm:min-h-36 md:min-h-40
            rounded-xl px-4 py-4
            text-gray-900
            bg-white/70
            border border-gray-200
            placeholder:text-gray-400
            focus:outline-none
            focus:border-violet-600
            focus:ring-4 focus:ring-violet-600/12
            transition-all resize-none"
            placeholder="Describe Your Need"
          />

          <button
            type="submit"
            className="w-full rounded-xl py-3
            bg-violet-600
            hover:bg-violet-700
            text-white font-semibold
            shadow-lg shadow-violet-200
            transition-all duration-300
            hover:-translate-y-0.5
            cursor-pointer"
          >
            Send Message
            <MoveRight className="inline ml-2 w-5 h-5" />
          </button>
        </form>

        {/* RIGHT SIDE */}
        <div className="w-full flex flex-col gap-4">
          <div
            className="flex items-center gap-3
            bg-white/60 backdrop-blur-xl
            text-gray-900
            p-4
            rounded-[18px]
            border border-white/80
            shadow-[0_4px_20px_rgba(0,0,0,0.06)]
            hover:-translate-y-1
            transition-all duration-300"
          >
            <div
              className="shrink-0 w-10 h-10 rounded-lg
              flex items-center justify-center
              bg-violet-100
              text-violet-600"
            >
              <Mail className="w-5 h-5" />
            </div>

            <div className="flex-1 text-left min-w-0">
              <h2 className="font-semibold text-gray-900 text-sm">
                Email
              </h2>

              <p className="text-sm text-gray-600 break-all">
                maxchy430@email.com
              </p>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=maxchy430@email.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MoveUpRight
                className="shrink-0 cursor-pointer rounded-full p-2
                w-9 h-9
                bg-gray-900
                text-white
                hover:bg-violet-600
                transition-colors"
              />
            </a>
          </div>

          <div
            className="flex items-center gap-3
            bg-white/60 backdrop-blur-xl
            text-gray-900
            p-4
            rounded-[18px]
            border border-white/80
            shadow-[0_4px_20px_rgba(0,0,0,0.06)]
            hover:-translate-y-1
            transition-all duration-300"
          >
            <div
              className="shrink-0 w-10 h-10 rounded-lg
              flex items-center justify-center
              bg-teal-50
              text-teal-500"
            >
              <Phone className="w-5 h-5" />
            </div>

            <div className="flex-1 text-left">
              <h2 className="font-semibold text-gray-900 text-sm">
                Phone
              </h2>

              <p className="text-sm text-gray-600">
                +977-9803637250
              </p>
            </div>

            <a href="tel:+9779803637250">
              <MoveUpRight
                className="shrink-0 cursor-pointer rounded-full p-2
                w-9 h-9
                bg-gray-900
                text-white
                hover:bg-teal-500
                transition-colors"
              />
            </a>
          </div>

          <div
            className="flex items-center gap-3
            bg-white/60 backdrop-blur-xl
            text-gray-900
            p-4
            rounded-[18px]
            border border-white/80
            shadow-[0_4px_20px_rgba(0,0,0,0.06)]
            hover:-translate-y-1
            transition-all duration-300"
          >
            <div
              className="shrink-0 w-10 h-10 rounded-lg
              flex items-center justify-center
              bg-orange-50
              text-orange-500"
            >
              <MapPin className="w-5 h-5" />
            </div>

            <div className="flex-1 text-left">
              <h2 className="font-semibold text-gray-900 text-sm">
                Location
              </h2>

              <p className="text-sm text-gray-600">
                Kathmandu, Nepal
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Kathmandu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MoveUpRight
                className="shrink-0 cursor-pointer rounded-full p-2
                w-9 h-9
                bg-gray-900
                text-white
                hover:bg-orange-500
                transition-colors"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
