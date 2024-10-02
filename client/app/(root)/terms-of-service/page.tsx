export const termsOfService = [
  {
    title: "Account creation",
    description:
      "By signing up for or using Cre8Fi, you’re agreeing to these terms. Take a moment to read through them. Cre8Fi is designed to empower creators by giving them opportunities to earn while they create. However, with great power comes responsibility, and by joining, you agree to play by the rules.",
  },
  {
    title: "Who can use Cre8Fi",
    description:
      "You need to be at least 18 years old to join the platform. By signing up, you’re promising us that all information provided is accurate, up-to-date, and belongs to you. No fake accounts or impersonation here—we want real people doing real things.",
  },
  {
    title: "Your content, your responsibility",
    description:
      "Whatever content you create on Cre8Fi is yours, and we respect that. That said, by posting it on the platform, you’re allowing us to showcase it, distribute it, and use it to help make the platform better for everyone (think promotional materials, etc.). It’s up to you to make sure that the content you post doesn’t violate anyone else’s rights, be it copyright, trademark, or other intellectual property issues. Don’t post anything illegal or harmful, and respect other creators' work just like you’d want them to respect yours.",
  },
  {
    title: "Earning on Cre8Fi",
    description:
      "We want you to be rewarded for your creativity. Through our point and token system, you can earn by producing quality content and engaging with the community. Payment is facilitated through blockchain technology for security and transparency. Misuse of the system or any fraudulent activities will result in termination of your account.",
  },
  {
    title: "Respect the community",
    description:
      "Cre8Fi thrives on collaboration and creativity, and that requires respect for one another. No hate speech, harassment, or discrimination is tolerated. Keep the vibe positive and helpful, and remember that we’re all in this together.",
  },
  {
    title: "Collaboration and projects",
    description:
      "When working with others on projects, be clear about expectations, timelines, and payment agreements. Use smart contracts to ensure both parties stay protected. If disputes arise, we have tools to help mediate, but honesty and transparency are the best policy here.",
  },
  {
    title: "Security and privacy",
    description:
      "We take your privacy seriously and will never sell your data. Protect your account by using strong passwords and, ideally, two-factor authentication. If you suspect a security issue, let us know immediately, and we’ll do our best to help.",
  },
  {
    title: "Termination of service",
    description:
      "Cre8Fi reserves the right to terminate accounts that violate these terms. If your account is terminated for any reason, any pending earnings may be withheld. But hey, if you’re playing by the rules, you’ve got nothing to worry about.",
  },
  {
    title: "Change of these terms",
    description:
      "We may need to update these terms from time to time. When that happens, we’ll give you a heads-up. Continued use of the platform means you accept the changes, so be sure to stay in the loop.",
  },
  {
    title: "Dispute resolution",
    description:
      "If you have an issue with Cre8Fi, let’s talk about it first and try to resolve things amicably. If that doesn’t work, legal channels remain open, but we’d prefer to keep things friendly.",
  },
  {
    title: "Compliance with laws",
    description:
      "By using Cre8Fi, you agree to follow all applicable local, national, and international laws. Don’t do anything shady—it’s not worth it.",
  },
  {
    title: "Contact Us",
    description:
      "Questions? Concerns? Just want to say hi? Reach out to us anytime, and we’ll get back to you as soon as we can.",
  },
];

const TermsOfServicesPage = () => {
  return (
    <main className="m-20">
      <h1 className="m-5 text-left text-customBlue font-bold text-2xl">Terms of Services</h1>
      <section>
        {termsOfService.map((term, index) => (
          <div key={index} className="text-left m-5">
            <h2 className="font-medium text-xl">{term.title}</h2>
            <p className="mt-5 text-lightGray font-normal text-sm ">{term.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default TermsOfServicesPage;
