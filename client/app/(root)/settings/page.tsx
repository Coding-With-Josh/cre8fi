import { ChangePasswordForm } from "@/components/gen/change-password-form";
import { ProfileAvatar } from "@/components/gen/profile-avatar";
import { ProfileForm } from "@/components/gen/profile-form";

const SettingsPage = () => {
  return (
    <div className="px-4 sm:px-8 mt-16">
      <ProfileAvatar />
      <ProfileForm />
      <div className="mt-16">
        <h2 className="text-2xl font-semibold">Change Password</h2>
        <ChangePasswordForm />
      </div>
    </div>
  );
};

export default SettingsPage;
