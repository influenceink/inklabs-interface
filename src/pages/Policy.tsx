import { Box, Typography, useMediaQuery } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_POLICY } from '../utils/constants';
import { Divider, Image, Paragraph, RedButton } from './Components';
import { PurchaseFlowContext } from '../contexts';
import { useContext } from 'react';

export const Policy = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  const { setShowModal } = useContext(PurchaseFlowContext);
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_POLICY} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_POLICY} type="primary">
        <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="center">
          <Box flexGrow={1} width="100%" display="flex" flexDirection="column">
            <Typography variant="h1">INK Games™ Privacy Policy</Typography>
            <Divider />
            <p>
              PLEASE READ THE FOLLOWING PRIVACY POLICY CAREFULLY. BY CLICKING THE &quot;ACCEPT&quot; BUTTON AT THE END OF THIS PRIVACY POLICY BELOW, OR BY USING THE WWW.INKGAMES.COM WEBSITE AND RELATED WEBPAGES (THE &quot;WEBSITE&quot;)OR ANY OF THE CONTENT MADE AVAILABLE VIA THE WEBSITE INCLUDING THE &quot;WOI&quot; GAME AND RELATED PLATFORM, (COLLECTIVELY THE &quot;PLATFORM&quot;) AND ANY OTHER PRODUCT, ONLINE SERVICE OR WEB SITE (INDIVIDUALLY AND COLLECTIVELY THE &quot;INK GAMES™ SERVICES&quot;) YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THIS PRIVACY POLICY.
            </p>
            <p>
              <b>Introduction</b>
            </p>
            <p>
              The data controller in respect of any Personal Information that you submit to us via the INK GAMES™ Services (or otherwise) is InfluenceInk, a company registered in Delaware, USA, (&quot;INK GAMES™&quot;, &quot;we&quot;, &quot;us&quot;, &quot;our&quot;). The Personal Information you submit to us via the INK GAMES™ Services (or otherwise) will be processed by us or by data processors appointed by us to undertake processing on our behalf.
            </p>
            <p>
              INK GAMES™ respects your privacy rights and recognizes the importance of protecting the information collected about you. We have adopted this Privacy Policy to explain how we collect, use and store your personal and non-personal information.
            </p>
            <p>
              If you want to know what Personal Information or Non-Personal Information we hold about you or if you have any other queries in relation to this Privacy Policy, please contact us by emailing us at support@inkgames.com . We will require you to verify your identity before releasing any information to you.
            </p>
            <p>
              <b>What Is Personal And Non-Personal Information?</b>
            </p>
            <p>
              &quot;Personal Information&quot; is information that we have collected from you that identifies you, or which, in conjunction with other information that is in our possession, or is likely to come into our possession, may be used by us to identify you.
            </p>
            <p>
              &quot;Non-Personal Information&quot;, is information that we have collected from you which cannot be used by us to identify you.
            </p>
            <p>
              <b>Which Data Does INK GAMES™ Collect And Use At Which Stage?</b>
            </p>
            <p>
              <small>3.1. Use Of Our Website</small>
            </p>
            <p>
              <small>3.1.1. General</small>
            </p>
            <p>
              If you access or use our Website we will collect the following Non-Personal Information:
              <ul>
                <li>Request (Name of the requested file)</li>
                <li>Browser type/ve Ink Games™ on (e.g.: Chrome, Safari)</li>
                <li>Browser language (e.g.: English)</li>
                <li>Operating System (e.g.: Windows 10)</li>
                <li>Resolution of the Browser window</li>
                <li>Screen resolution</li>
                <li>Javascript active</li>
                <li>Java On /Off</li>
                <li>Cookies On / Off</li>
                <li>Color settings</li>
                <li>Referral URL (the previously visited page)</li>
                <li>Time of Access</li>
                <li>Clicks</li>
              </ul>
            </p>
            <p>
              INK GAMES™ also may maintain log files which contain IP addresses. An IP address is a numeric address that may be assigned to your computer by your Internet Service Provider and can, in certain circumstances, amount to Personal Information. In general, we use log files to monitor traffic on our Website and to troubleshoot technical problems. In the event of user abuse of our Website, however, we may block certain IP addresses.
            </p>
            <p>
              We use the information set out in this Section 3.1.1 to optimize your experience of the INK GAMES™ Services. The collection of the information set out in this Section 3.1.1 is mandatory. INK GAMES™ is not able to properly provide you with the INK GAMES™ Services without this basic information.
            </p>
            <p>
              <small>3.1.2. Cookies</small>
            </p>
            <p>
              We use cookies to ensure that you get the most out of the INK GAMES™ Services. Cookies are small text files that are applied to your Internet enabled device by websites. Cookies allow us to store and then retrieve information on your computer about your visit to our Website (e.g. when you accessed the Website). We may use cookies to deliver content specific to your interest and to monitor Website usage or to simplify your visits to the INK GAMES™ Services (for example, by remembering your login details).
            </p>
            <p>
              We may also store flash cookies, also known as &quot;local shared objects,&quot; on your Internet enabled device if the Website uses Adobe Flash. Flash cookies are small files similar to cookies and are used to remember the Website&apos;s settings to personalize the look and feel of the Website. Flash cookies only collect data in the aggregate. Like normal cookies, Flash cookies are represented as small text files on your internet enabled device.
            </p>
            <p>
              The collection of information in this Section 3.1.2 is not mandatory. Most browsers are automatically set to accept cookies whenever you visit a website. You can disable cookies or set your browser to alert you when cookies are being sent. However, your web experience may be less satisfying without the use of cookies. For more information about how to reject cookies using your internet browser settings please consult the &quot;Help&quot; section of your internet browser (or alternatively visit http://www.aboutcookies.org).
            </p>
            <p>
              <small>3.1.3. Analytic Metrics Tools and Other Technologies</small>
            </p>
            <p>
              INK GAMES™ may also use its own or third-party proprietary analytic metrics tools and other analytics technologies to collect the information referred to in this Privacy Policy. We may use such technology to deliver content specific to your interest and to monitor usage of the INK GAMES™ Services.
            </p>
            <p>
              The collection of the information set out in this Section 3.1.3 is not mandatory. Our website uses Google Analytics. To learn how Google uses your data and how you can opt out click here: https://www.google.com/policies/privacy/partners/
            </p>
            <p>
              <small>3.2. Account Registration and Commercial Transaction</small>
            </p>
            <p>
              You will need to register for an INK GAMES™ account in order to access and use some of the INK GAMES™ Services (&quot;Account&quot;). If you register for an Account, in addition to the information we collect under Section 3.1 we will also collect any or all of the following Personal Information:
              <ul>
                <li>Account ID</li>
                <li>LogIn ID</li>
                <li>Display name</li>
                <li>Password</li>
                <li>Email address</li>
                <li>Community moniker</li>
                <li>User handle</li>
                <li>Referral Code(if any)</li>
                <li>Birthday</li>
                <li>Creation date</li>
              </ul>
            </p>
            <p>
              If you conduct and carry out commercial transactions via any of the INK GAMES™ Services, in addition to the Personal Information set out above, we may also collect the following Personal Information and Non-Personal Information:
              <ul>
                <li>First name</li>
                <li>Last name</li>
                <li>Billing address (including street, ZIP code, country)</li>
                <li>Shipping address for physical goods (including street, ZIP code, country)</li>
                <li>Telephone number</li>
                <li>Date and data of transaction</li>
                <li>Object acquired</li>
                <li>Monetary value</li>
                <li>Confirmation email address</li>
              </ul>
            </p>
            <p>
              We use this Personal Information and Non-Personal Information to:
              <ul>
                <li>Fulfill our contractual obligations set forth in our Terms of Service and comply with applicable law;</li>
                <li>Track the transactions you have made via the INK GAMES™ Services;</li>
                <li>Remember which products you have added to your basket;</li>
                <li>Provide customer service to you in relation to your use of the INK GAMES™ Services, to deal with enquiries and complaints relating to the use of the INK GAMES™ Services and to notify you about any changes to the services that we provide via the INK GAMES™ Services;</li>
                <li>Send you reminder and verification notifications such as password reminders.</li>
              </ul>
            </p>
            <p>
              We are obligated by applicable law to identify our commercial customers. We are also obliged by applicable law to collect and store detailed information regarding all commercial transactions, especially for accounting and tax purposes.
            </p>
            <p>
              The collection of the information set out in this Section 3.2 is mandatory. INK GAMES™ is prohibited by law from providing you with commercial services without collecting such information.For legal reasons this information will be stored as long as your account remains open and thereafter for the retention periods set forth by law for accounting and tax purposes.
            </p>
            <p>
              <small>3.3. Playing the Game</small>
            </p>
            <p>
              When you use the platform, in addition to the information we collect under Section 3.1 and 3.2 above we may also collect the following Personal Information and Non-Personal Information:
              <ul>
                <li>Feature usage</li>
                <li>Game play statistics and scores (including game progress)</li>
                <li>Performance data of the game client (including use of CPU, GPU and memory)</li>
                <li>User rankings</li>
                <li>Click paths</li>
                <li>Data that you may provide in surveys</li>
                <li>Your account preferences</li>
                <li>Online profiles</li>
              </ul>
            </p>
            <p>
              If you participate in competitions, gameplay or other usage of our platform and games, relevant information such as your results or ranking may be displayed with your community moniker, name and handle on the Website. The information may also be utilized in our outreach and other visibility enhancement programming.
            </p>
            <p>
              When the Game, or any element or module thereof, is updated or &quot;patched,&quot; our patch routine may check your computer to see that you have the most recent version of Game-specific files.
            </p>
            <p>
              We use this information to fulfill our contractual obligations to you, to optimize game play, enhance your game experience, provide marketing information and special offers for the Game to you and to enforce our rights and the rights of other users in case of suspicion of fraud (see also Sec. 3.4 below).
            </p>
            <p>
              The collection of the information set out in this Section 3.3 is mandatory as we cannot operate, optimize and enhance the Platform properly without collecting this information. If you do not agree with this data collection and storage, we will need to deactivate your account and access to the Game. For legal reasons this information will be stored as long as your account remains open and for the applicable statutes of limitations thereafter.
            </p>
            <p>
              <small>3.4. Misuse</small>
            </p>
            <p>
              In addition to Sections 3.1 to 3.3, if we reasonably suspect that any of the INK GAMES™ Services or your Account is being, or has been, misused, including without limitation, by virtue of any:
              <ul>
                <li>DoS attacks</li>
                <li>Hacking</li>
                <li>Cheating</li>
                <li>Fraud</li>
                <li>Distribution of spam and/or viruses</li>
                <li>Defamation, racism, hate speech etc.</li>
                <li>Other violations of our Terms of Service</li>
              </ul>
            </p>
            <p>
              The INK GAMES™ may collect further Personal Information and Non-Personal Information to verify or refute such suspicions within the limits of applicable law and taking into account your reasonable data protection interests. We will use this information to comply with applicable law and enforce our rights under civil and penal law against the respective users.
            </p>
            <p>
              The collection of the information set out in this Section 3.4 is mandatory. We may not be able to enforce our rights without such information.For legal reasons this information will be stored as long as your account remains open and for the applicable statues of limitations thereafter.
            </p>
            <p>
              <small>3.5. Crash Reports, Customer Support</small>
            </p>
            <p>
              Optionally you may choose to send crash reports or contact Customer Support for any technical and commercial issues.
            </p>
            <p>
              In addition to the data collected in Sec. 3.1 to 3.4 above the data provided by you may include:
              
            </p>
            <p>
              The collection of the information set out in this Section 3.5 is not mandatory. However, we might not be able to fix bugs or handle the technical and commercial issues you have without this information. For legal reasons this information will be stored as long as your account remains open and for the applicable statues of limitations thereafter.
            </p>
            <p>
              <b>Will INK GAMES™ Share My Information with Third Parties?</b>
            </p>
            <p>
              Other than as expressly set out in this Privacy Policy, INK GAMES™ will never share your Personal Information with third parties without your consent.
            </p>
            <p>
              INK GAMES™ may share your Personal Information with:
              <ul>
                <li>Any of our affiliated companies, including INK Games™, InfluenceInk</li>
                <li>Third party service providers under our control and monitoring where such disclosure is necessary or helpful to enable us to provide you with any of the INK GAMES™ Services and such third parties are contractually bound to process your Personal Information and/or Non-Personal Information under the same restrictions as are set forth in this Privacy Policy</li>
                <li>Third party payment providers which are bound by strict privacy policies to carry out payment transactions with you</li>
                <li>Any person to whom disclosure is necessary to enable us to enforce our rights under this Privacy Policy or under our Terms of Service; and/or</li>
                <li>Any person to whom disclosure is necessary to enable us to enforce our rights under this Privacy Policy or under our Terms of Service (such as law enforcement authorities in case of fraud investigations)</li>
              </ul>
            </p>
            <p>
              We will not disclose your Personal Information to anybody else without your explicit approval.
            </p>
            <p>
              <b>How Does INK GAMES™ Protect Your Personal Information?</b>
            </p>
            <p>
              The security of your personal information is important to us. We follow applicable law to protect the Personal Information submitted to us, both during transmission and in storage.
            </p>
            <p>
              Your Personal Information will be stored on servers which may be owned by third parties such as Amazon Web Services, Inc. (&quot;AWS&quot;), Google, Inc. (&quot;Google&quot;), Microsoft Corp. (&quot;MS&quot;) and/or their respective affiliates all of which are for purposes of data protection under contractual control by us and/or CIG. Any Personal Information that you provide to us in accordance with this Privacy Policy will be adequately protected by this Privacy Policy, our contract with CIG and Google, AWS, MS or any other third party service providers which implement applicable law for data protection.
            </p>
            <p>
              If you have any questions about security on our Website, please contact us at support@inkgames.com .
            </p>
            <p>
              <small>Review, Correction Of Your Information, Requesting Removal From Mailing Lists And Deactivating Your Account</small>
            </p>
            <p>
              You can correct, update or delete your Account information at any time by logging on our Website and navigating to your Account settings. Should you be unable to log in your Account, please contact us at support@inkgames.com  . We will be happy to review, update or remove information as appropriate. If you wish to have your account deactivated, please contact support@inkgames.com .
            </p>
            <p>
              <small>Public Information Including User Generated Content, Online Forums, Blogs And Profiles</small>
            </p>
            <p>
              You may choose to disclose information about yourself in the course of contributing user generated content to the Website or in public online chat rooms, blogs, message boards, user &quot;profiles&quot; for public view or in similar forums on our Website. Information that you disclose in any of these forums is public information, and there is no expectation of privacy or confidentiality there.
            </p>
            <p>
              You should be aware that any Personal Information you submit in the course of these public activities can be read, collected, or used by other users of these forums, and could be used to send you unsolicited messages in breach of our Terms of Service. We are not responsible for the Personal Information you choose to submit in these forums.
            </p>
            <p>
              If you post a video, image or photo on any of our Website for public view you should be aware that these may be viewed, collected, copied and/or used by other users without your consent. We are not responsible for the videos, images or photos that you choose to submit to the Website.
            </p>
            <p>
              <small>Third Party Sites.</small>
            </p>
            <p>
              Our Website may contain advertising or services which link to other websites such as Twitter, Facebook and YouTube. The fact that we link to a third party website is not an endorsement, authorization or representation of our affiliation with that third party website or the operator of that third party website. If you click on a link to a third party site, including on an advertisement, you will leave the INK GAMES™ site you are visiting and go to the site you selected. Because we cannot control the activities of third parties, we cannot accept responsibility for any use of your personal information by such third parties, and we cannot guarantee that they will adhere to the same privacy and security practices as INK GAMES™. We encourage you to review the privacy policies of any other service provider from whom you request services. If you visit a third party website that is linked to an INK GAMES™ Service, you should consult that third party website&apos;s privacy policy before providing any personal information.
            </p>
            <p>
              We may receive some of the information that you submit to any third party website that you access from an advertisement contained on any of the INK GAMES™ Services. Both we and the owner or operator of that third party website will be the data controller in respect of any such information.
            </p>
            <p>
              <small>Products/Services Offered In Partnership With Third Party(s)</small>
            </p>
            <p>
              Members may register for other products and/or services via the INK GAMES™ Services. Certain products and/or services available via the INK GAMES™ Services are provided to you in partnership with third party(s) and may require you to disclose Personal Information in order to register for and access such products and/or services. Such products and/or services shall identify the third party partners at the point of registration. If you elect to register for such products and/or services your Personal Information will be transferred to such third party(s) and will be subject to the privacy policy and practices of such third party(s). We are not responsible for the privacy practices and policies of such third party(s) and, therefore, you should review the privacy practices and policies of such third party(s) prior to providing your Personal Information in connection with such products and/or services.
            </p>
            <p>
              <small>Contact Information</small>
            </p>
            <p>
              If you have questions or concerns regarding this statement, you may contact us using the following contact information:
            </p>
            <p>
              INK Games™
            </p>
            <p>
              30767 Gateway Place, Suite 160
            </p>
            <p>
              Rancho Mission Viejo
            </p>
            <p>
              California, 92694
            </p>
            <p>
              USA
            </p>
            <p>
              Data Protection Officer at support@inkgames.com .
            </p>
          </Box>
        </Box>
      </PageContent>
    </>
  );
};
