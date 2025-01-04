import { useForm } from "react-hook-form";


const EditProfileForm = ({ user, setIsEditing, fetchUsers }) => {

    //   const apiHandler = useAxios();
    //   const { user: authUser } = UseAuth();

      const { register, handleSubmit, formState: { errors } } = useForm({
            defaultValues: {
                  name: user?.name || "",
                  email: user?.email || "",
                  phone: user?.phone || "",
                  country: user?.address?.country || "",
                  district: user?.address?.district || "",
                  streetAddress: user?.address?.streetAddress || "",
                  gender: user?.gender || "",
                  facebook: user?.socialLinks?.facebook || "",
                  linkedin: user?.socialLinks?.linkedin || "",
                  twitter: user?.socialLinks?.twitter || "",
                  github: user?.socialLinks?.github || "",
                  status: user?.status || ""
            }
      });

    //   const onSubmit = (data) => {
    //         const { name, email, phone, country, district, streetAddress, gender, facebook, linkedin, github, status } = data || {}

    //         const updatedUserInfo = {
    //               name: name,
    //               email: email,
    //               photoURL: user?.photoURL,
    //               phone: phone,
    //               address: {
    //                     country: country,
    //                     district: district,
    //                     streetAddress: streetAddress
    //               },
    //               gender: gender,
    //               socialLinks: {
    //                     facebook: facebook,
    //                     linkedin: linkedin,
    //                     github: github
    //               },
    //               accountSettings: {
    //                     status: status,
    //                     lastLogin: authUser?.lastLoginAt?.lastLoginAt
    //               }
    //         }

    //         // update profile
    //         apiHandler.put(`/users/by-email/${user.email}`, updatedUserInfo);

    //         setIsEditing(false);
    //         fetchUsers()
    //   };

      return (
            <div className="px-8 max-h-[82vh] overflow-y-auto custom-scrollbar font-inter">
                  <h2 className="flex items-center font-inter justify-start text-3xl font-bold text-secondary py-4">Update Profile</h2>

                  <form onSubmit={handleSubmit()} className="space-y-6">
                        {/* Name Field */}
                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">Name</label>
                              <input
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                              {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                        </div>

                        {/* Email Field */}
                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">Email</label>
                              <input
                                    defaultValue={user?.email}
                                    type="email"
                                    readOnly
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition hover:cursor-not-allowed"
                              />
                        </div>

                        {/* Phone Field */}
                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">Phone</label>
                              <input
                                    {...register("phone")}
                                    type="tel"
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                        </div>

                        {/* Gender Field */}
                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">Gender</label>
                              <select
                                    {...register("gender")}
                                    defaultValue={user?.gender || ""}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              >
                                    <option value="">Select Gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                              </select>
                        </div>

                        {/* Address Fields */}
                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">Country</label>
                              <input
                                    {...register("country")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                        </div>

                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">District</label>
                              <input
                                    {...register("district")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                        </div>

                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">Street Address</label>
                              <input
                                    {...register("streetAddress")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">Facebook</label>
                              <input
                                    {...register("facebook")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                        </div>

                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">LinkedIn</label>
                              <input
                                    {...register("linkedin")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                        </div>


                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">GitHub</label>
                              <input
                                    {...register("github")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                        </div>

                        {/* Status Field */}
                        <div className="flex flex-col">
                              <label className="text-gray-700 font-semibold mb-1">Status</label>
                              <input
                                    {...register("status")}
                                    className="w-full p-3 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:outline-none transition"
                              />
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-center">
                              <input
                                    className="inline-flex items-center justify-center gap-2 rounded px-8 py-3 text-[15px] font-medium tracking-wide text-white shadow-md transition duration-300 bg-primary hover:bg-hover hover:shadow-sm cursor-pointer w-full"
                                    type="submit"
                                    value="Save Changes"
                              />
                        </div>
                  </form>
            </div>
      );
};

export default EditProfileForm;
