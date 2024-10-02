

const privacyPolicy = [
  {
    title: "Your privacy matters",
    description:
      "We get it—your privacy is important. At Cre8Fi, we’re committed to keeping your personal information safe. This privacy policy explains how we collect, use, and protect your data. By using Cre8Fi, you agree to the terms outlined here.",
  },
  {
    title: "What we collect",
    description:
      "To help you get the most out of Cre8Fi, we collect a few basic things like your name, email address, and other details needed to set up your account. We also collect data related to how you use the platform (e.g., the content you create and interact with) to help improve your experience.",
  },
  {
    title: "How we use our information",
    description:
      "Your data helps us personalize the Cre8Fi experience for you—whether that’s showing you relevant content or connecting you with the right opportunities. We may also use your data to improve our platform, troubleshoot issues, and keep things running smoothly. We’ll never sell your personal information to third parties. We value your trust and are here to protect your data, not profit off it.",
  },
  {
    title: "Third-party services",
    description:
      "Some features on Cre8Fi may involve third-party services (like blockchain technology for payments). When you use these services, your data may be shared with them in accordance with their privacy policies. Rest assured, we only work with trusted partners who share our commitment to protecting your privacy.",
  },
  {
    title: "Cookies and tracking",
    description:
      "We use cookies to make your Cre8Fi experience better, like remembering your preferences and ensuring the platform runs smoothly. You can adjust your browser settings to limit cookies, but keep in mind that doing so might affect how well certain features work.",
  },
  {
    title: "Data security",
    description:
      "We take data security seriously. While no system is 100% foolproof, we’ve implemented industry-standard measures to safeguard your personal information. This includes encryption and secure servers to ensure your data is as safe as possible.",
  },
  {
    title: "Your rights",
    description:
      "You have the right to access, modify, or delete your personal information at any time. Just let us know, and we’ll make it happen. If you want to deactivate your account, we’ll respect that decision—but we’ll be sad to see you go!",
  },
  {
    title: "Data retention",
    description:
      "We’ll keep your information for as long as you have an active account on Cre8Fi. If you choose to close your account, we may retain some data for legal, security, or operational reasons, but we’ll only keep what’s necessary.",
  },
  {
    title: "Changes to policy",
    description:
      "From time to time, we may update our privacy policy to reflect new features or changes to how we handle your data. When that happens, we’ll let you know. Continuing to use Cre8Fi means you agree to the updated terms.",
  },
  {
    title: "Contact Us",
    description:
      "Got questions about how we handle your data? We’re here to help! Feel free to reach out to our support team, and we’ll get back to you as soon as possible. By signing up for Cre8Fi, you’re agreeing to these terms of service and privacy policy. We’re here to empower you, and these guidelines are in place to keep everything running smoothly while protecting your rights. Let’s build something amazing together!",
  },
];


const PolicyPage = () => {
  return (
    <main className="m-20">
      <h1 className="m-5 text-left text-customBlue font-bold text-2xl">
       Privacy Policy
      </h1>
      <section>
        {privacyPolicy.map((term, index) => (
          <div key={index} className="text-left m-5">
            <h2 className="font-medium text-xl">{term.title}</h2>
            <p className="mt-5 text-lightGray font-normal text-sm ">
              {term.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};



export default PolicyPage;
