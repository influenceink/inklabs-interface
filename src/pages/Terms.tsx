import { Box, Typography, useMediaQuery, Link } from '@mui/material';
import { Helmet } from 'react-helmet';

import { PageContent } from '../components/PageContent';
import { APP_TITLE, PAGE_TITLE_TERMS } from '../utils/constants';
import { Divider } from './Components';
import { useContext } from 'react';

export const Terms = () => {
  const xl = useMediaQuery('(max-width: 1200px)');
  return (
    <>
      <Helmet>
        <title>
          {PAGE_TITLE_TERMS} | {APP_TITLE}
        </title>
      </Helmet>
      <PageContent title={PAGE_TITLE_TERMS} type="primary">
        <Box display="flex" flexDirection={xl ? 'column' : 'row'} gap={xl ? 2 : 6} alignItems="center">
          <Box flexGrow={1} width="100%" display="flex" flexDirection="column">
            <Typography variant="h1">INK Terms of Use</Typography>
            <Divider />
            <p>
              Welcome!
            </p>
            <p>
              Please read these Terms of Service (the &quot;Terms&quot;) and our &nbsp;
              <Link href="/policy" sx={{ ':hover': { color: '#ff225e' } }}>Privacy Policy</Link> &nbsp; carefully, as they constitute a legally binding agreement between you (&quot;you,&quot; your,&quot; or &quot;User&quot;) and INK Games (&quot;INK&quot;, &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
            </p>
            <p>
              These Terms and the Privacy Policy set out the terms on which INK offers you access to and use of (a) the website located at www.inktoken.com and all relevant sub-pages associated with the foregoing URL or any content and functionalities accessible through such URL or its sub-pages (collectively, the &quot;Site&quot;)<small>[1]</small>.
            </p>
            <p>
              <b>You agree that by using or accessing the Site, you have read, understood and agreed  to be bound by all of these Terms and the Privacy Policy.  Please note that Section 16 contains a binding arbitration clause and class action waiver. By agreeing to these Terms, you agree to resolve all disputes in conjunction with Section 16, and that you waive any right to have the dispute decided by a judge or jury, and you waive any right to participate in collective action, whether that be a class action, class arbitration, or representative action.</b>
            </p>
            <p>
              BY USING OR ACCESSING THE SITE IN ANY MANNER, YOU AFFIRM, REPRESENT AND WARRANT THAT NOT ONLY HAVE YOU READ, UNDERSTOOD AND AGREED TO BE BOUND BY ALL OF THE TERMS AND CONDITIONS SET FORTH IN THESE TERMS (INCLUDING ANY ADDITIONAL TERMS, POLICIES AND AGREEMENTS SPECIFIED AND/OR REFERENCED BELOW OR OTHERWISE INCORPORATED INTO THESE TERMS), BUT ALSO THAT <b>(A)</b> YOU HAVE THE RIGHT, AUTHORITY AND CAPACITY TO ENTER INTO THESE TERMS AND MEET ALL OF THE ELIGIBILITY AND OTHER REQUIREMENTS DESCRIBED HEREIN AND <b>(B)</b> THAT YOUR ACCESS AND USE OF THE SITE IS PERMITTED BY, AND SHALL NOT VIOLATE, ANY APPLICABLE LAWS, INCLUDING THOSE IN YOUR JURISDICTION. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS, YOU ARE PROHIBITED FROM VISITING, ACCESSING, USING, OR TRANSACTING ON THE SITE.
            </p>
            <p>
              IF YOU DO NOT AGREE TO BE LEGALLY BOUND BY ALL OF THE FOREGOING TERMS, YOU MUST NOT ACCESS OR USE THE SITE IN ANY MANNER.
            </p>
            <p>
              Our Privacy Policy is incorporated by reference into these Terms, and is expressly acknowledged and agreed to by you.
            </p>
            <p>
              <b>1. Eligibility</b>
            </p>
            <p>
              The information and services provided by or through the Site are not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject INK to any registration requirement within such jurisdiction or country.  Accordingly, Users who choose to access the Site from locations outside of the United States of America do so on their own initiative.  [2] The Site is intended for users who are at least 18 years of age, or the age of majority in their jurisdiction, whichever age is greater.  If you are not 18, or have not reached the age of majority in your jurisdiction, then you are not permitted to use or register to use the Site.
            </p>
            <p>
              <b>2. Account and Security.</b>
            </p>
            <p>
              As part of the registration process to use and access the Site, you may be required to sign up for an INK account (the &quot;Account&quot;), and select a password and user name (or &quot;INK ID&quot;) for the Account.  You agree to (i) provide true, accurate, current, and complete information yourself or about the entity you represent as prompted by the Account registration form, (ii) maintain and promptly update any information relating to you or the entity you represent to maintain the accuracy, currentness, and completeness of the information.  You agree not to select or use a user name which (i) you don’t have the right to use, (ii) refers to another person or entity with the intent to impersonate such person or entity.  If you are agreeing to these Terms or registering a Account on behalf of an organization or other entity, you represent and warrant that you are duly authorized to agree to these Terms on behalf of such organization or entity, and bind them to these Terms (in which case, as approximate, &quot;you&quot; and &quot;your&quot; in these Terms shall refer to the entity or organization you represent). 
            </p>
            <p>
              You agree to establish only one Account, and you acknowledge that you may not transfer your Account to any other person or entity without our express written permission.  In the event of any dispute between two or more parties as to the ownership of an Account, you agree that INK shall be the sole arbiter of such dispute and that INK’s decision (which may include termination or suspension of the Account in question) shall be final and binding on all parties.  INK may, in its sole and absolute discretion, refuse to open an Account, suspend or terminate any Account, or suspend and trading of specific non-fungible tokens (&quot;NFTs&quot;), INK Tokens or other items associated with your Account.
            </p>
            <p>
              Provided you are in compliance with these Terms and any other applicable terms of service, INK may permit you to connect an eligible Third-Party Wallet to your Account for the purpose of reserving and/or holding eligible INK Tokens.  Notwithstanding anything to the contrary, INK reserves the right and has sole discretion to (i) determine which Third-Party Wallets are eligible to be connected to any Account, (ii) to prohibit for any reason, at any time, the connection of any Third-Party Wallet to any Account, and (iii) impose additional terms and conditions on you before permitting you to connect an eligible Third-Party Wallet to your Account. You acknowledge and agree that Third-Party Wallets are not associated with, maintained by, supported by, or affiliated with INK.
            </p>
            <p>
              You are responsible for maintaining the confidentiality of your password, user name, account recovery information, or other account details.  You are fully responsible for all activities, charges, losses, or damages that occur under your account, including without limitation all actions by any authorized or unauthorized sub-users. You agree to immediately notify INK of any suspected or actual unauthorized use of your password or account, or any other breach of security.  To the extent you use any Third-Party Wallet or connect any Third-Party Wallet to an Account, you are fully responsible for maintaining the confidentiality and secrecy of the Third-Party Wallet, including any private keys, passwords, seed phrases, or secret recovery passwords.  You all such private keys, passwords, seed phrases, or secret recovery passwords associated with your Third-Party Wallet are held solely by you and not by INK, and INK cannot assist in you recovering or accessing such private keys, passwords, seed phrases, or secret recovery passwords. INK is not responsible for any lost information relating to any Account or any Third-Party Wallet.
            </p>
            <p>
              <b>3. Connecting a Cryptocurrency Wallet Is Required to Transact On the Site.</b>
            </p>
            <p>
              Transacting on the Site requires a third-party private key manager service selected by you (e.g., Metamask) (the &quot;Third-Party Wallet&quot;) to administer your private keys for NFTs, INK Tokens and any other tokens. You and the third-party private key manager you select are entirely responsible for security related to your private key, transactions you make on the Site and all information that you may have shared with the third-party private key manager (including without limitation, your name, email or phone number).
            </p>
            <p>
              <b>You acknowledge and agree that by linking a Third-Party Wallet to your Account, you understand that you are solely responsible for maintaining the security of your wallet and your control over any wallet-related authentication credentials, private or public cryptocurrency keys, tokens, NFTs or cryptocurrencies that are stored in or are accessible through your wallet.</b>
            </p>
            <p>
              Any unauthorized access to your Third-Party Wallet by other parties could result in the loss or theft of your NFTs, INK Tokens or other tokens held in your wallet and any associated wallets, including any linked financial information such as bank account(s) or credit card(s), as well as making it impossible for you to access your Account. We are not responsible for managing and maintaining the security of your Third-Party Wallet nor for any unauthorized access to or use of your Third-Party Wallet. You acknowledge that in the event of any unauthorized use of or access to your Account, private keys or other breach of security, you accept that due to the nature of the Site, INK will be unable to remedy any issues that arise.
            </p>
            <p>
              <b>4. INK Token Reservations.</b>
            </p>
            <p>
              Upon logging into your Account and connecting a Third-Party Wallet, you may be presented with an option to reserve one or more NFTs offered by INK (each, a &quot;INK Token&quot;).  INK Tokens are being offered at $0.002 per INK Token and must be reserved because INK Tokens have not yet been generated.  You will be offered the ability to select which currency you want to proceed to use to reserve your INK Tokens.  For example, if you choose to pay us in Ethereum, then you will be prompted to connect Third-Party Wallet and to transfer ETH to us, at which point you will have successfully &quot;reserved&quot; INK Tokens that will be associated with your INK ID and Third-Party Wallet.  However, INK reserves the right to set any price for INK Tokens and to allow payment to be made in cash or cash equivalents. 
            </p>
            <p>
              You understand and acknowledge that (i) no token generation event for the INK Tokens has yet occurred, and therefore no INK Tokens currently exist on the blockchain, and (ii) the reservation of any INK Token(s) entitles you only to receive a corresponding number of INK Token(s), at the agreed-upon price, upon the token generation event.  We offer you the opportunity to reserve INK Tokens before they are available on the blockchain, in which case your Third-Party Wallet will be charged the full amount to reserve the INK Tokens.  When the token generation event happens, you do not need to do anything, we will automatically send the number of INK Tokens you have reserved to your Third-Party Wallet within twenty-four hours.  After the token generation event has occurred, and INK Tokens are available on the blockchain, we will charge your Third-Party Wallet for the number of INK Tokens you buy, and you will be credited with a number of INK Tokens corresponding to your purchase. You may also be eligible to receive INK Tokens to the extent you refer another person to the Site and such person identifies you as the referrer when they create their Account.  You may use your Account to review your current INK Tokens and INK Token reservations.  You acknowledge and agree that no digital currency or goods offered for sale or reservation by INK, including INK Tokens, have any monetary value.  To the extent the INK Token is never added to the blockchain, your Third-Party Wallet will be refunded, and you agree that you shall have no claim against INK or its affiliates for any losses relating to INK Tokens.  All reservations or sales of digital goods, including INK Tokens, are final and non-refundable.
            </p>
            <p>
              <b>5. Ownership of Content.</b>
            </p>
            <p>
              Unless otherwise indicated in writing by us, the Site and all services and/or content offered thereon, and all other materials contained therein, including, without limitation, our logos, and all designs, text, graphics, pictures, information, data, software, sound files, other files, and the selection and arrangement thereof (collectively, &quot;INK Content&quot;) are the proprietary property of INK or our affiliates, licensors, or users, as applicable. The INK logo and any INK product or service names, or slogans that may appear on the Site, in the Site or elsewhere are trademarks of INK or our affiliates, and may not be copied, imitated or used, in whole or in part, without our prior written permission.  In addition, the look and feel of the INK Content, including without limitation, all page headers, custom graphics, button icons, and scripts constitute the service mark, trademark, or trade dress of INK and may not be copied, imitated, or used, in whole or in part, without our prior written permission.
            </p>
            <p>
              <b>6. Third Party Sites.</b>
            </p>
            <p>
              The Site may include hyperlinks to other websites, metaverses, products, services, content, promotions and/or resources (collectively, &quot;Third Party Sites&quot;) that are provided solely as a convenience to you. You acknowledge and agree that we have no control over, and are not responsible for, any Third Party Sites, and that we do not endorse any advertising, products, services or other materials on or made available from any Third Party Sites. Furthermore, you acknowledge and agree that we are not liable, directly or indirectly, for any loss or damage, caused or alleged to be caused, or which may be incurred, as a result of the availability or unavailability of any Third Party Site, including as a result of any use of, or reliance placed by you upon, any Third Party Site or any advertising, promotions, resources, services, content, products or other materials on, or made available from, any Third Party Site (or the completeness or accuracy thereof). If you access any such Third Party Sites, you do so solely at your own risk, and you hereby expressly waive and release INK, its affiliates, and their respective officers, employees, directors, parents, subsidiaries, agents, suppliers, and licensors from all liability arising from your use of any such Third Party Site.
            </p>
            <p>
              <b>7. Rights and Licenses.</b>
            </p>
            <p>
              The Site may provide you with the opportunity to submit, post, display, transmit or otherwise make available certain content, including messages, files, data, software, sound, videos, photos, graphics and other items, on or through the Site (all of the foregoing, inclusive of all metadata relating thereto, but expressly excluding any INK Content, &quot;User Content&quot;).  By submitting, transmitting, posting, displaying or otherwise making available any User Content, you grant us a worldwide, non-exclusive, sublicensable, royalty-free and paid-up license to use such User Content for our lawful business purposes, including to engaged other Users, as well as to provide, promote, and improve the Site, without obligation. You represent and warrant that you have, or have obtained, all rights, licenses, consents, permissions, power and/or authority necessary to grant the rights granted herein for any User Content.
            </p>
            <p>
              Provided that you are eligible to use the Site, you are granted a limited, revocable, non-exclusive and non-transferable license to access and use the Site in accordance with these Terms.  We reserve all rights not expressly granted to you in and to the Site, the Site, the INK Content and any and all INK marks and logos.
            </p>
            <p>
              <b>8. User Content Monitoring.</b>
            </p>
            <p>
              We shall have the right, but not the obligation, to monitor the User Content and any other content submitted to or posted through the Site (including the INK Content), to determine compliance with the Terms and the Community Guidelines, as well as to satisfy any requirement under law or government request. We shall have the right, but not the obligation, to edit, refuse to post or remove any User Content submitted to or posted through the Site. You acknowledge that we reserve the right to delete, edit, block, correct, refuse to post or permanently remove from our systems any material that is believed to be unlawful, in breach of these Terms or the Community Guidelines or that is otherwise objectionable, at our sole discretion.
            </p>
            <p>
              <b>9. Unsolicited User Ideas.</b>
            </p>
            <p>
              You may choose to submit comments, bug reports, ideas or other feedback about the Site and the services or content therein, including about how to improve the Site (&quot;User Ideas&quot;). By submitting any User Ideas, you agree that we are free to use such User Ideas at our discretion and without additional compensation to you, and to disclose such User Ideas to third parties (whether on a non-confidential basis, or otherwise). You hereby grant us a perpetual, irrevocable, non-exclusive, paid-up worldwide license under all rights necessary for us to incorporate, use and improve upon your User Ideas for any purpose, without any payment to you.
            </p>
            <p>
              <b>10. Digital Millennium Copyright Notice.</b>
            </p>
            <p>
              Other than INK Content, all other trademarks, product names, and logos appearing in the Site or on the Site, including User Content, are the property of their respective owners and may not be copied, imitated, or used, in whole or in part, without the permission of the applicable trademark holder. Without limiting the foregoing, if you believe that third-party material appearing in the Site or on the Site infringes your copyright or trademark rights, please file a notice of infringement by contacting the Copyright Agent listed below.
            </p>
            <p>
              We respect the intellectual property rights of others and attempt to comply with all relevant laws. We will review all claims of copyright infringement received and remove any content deemed to have been posted or distributed in violation of any such laws.
              Our designated agent under the Digital Millennium Copyright Act (the &quot;Act&quot;) for the receipt of any Notification of Claimed Infringement which may be given under that Act is as follows:
            </p>
            <p>
              Directed to Copyright Agent at
            </p>
            <p>
              ATTN: Copyright Agent
            </p>
            <p>
              InfluenceInk, Inc. (DBA INK Games)
            </p>
            <p>
              3200 Palm Way, Suite 122
            </p>
            <p>
              Austin, TX, 78758
            </p>
            <p>
              If you believe that your work has been copied in a way that constitutes copyright infringement, please provide our agent with notice in accordance with the requirements of the Act, including (i) a description of the copyrighted work that has been infringed and the specific location in the Site or on the Site where such work is located; (ii) a description of the location of the original or an authorized copy of the copyrighted work; (iii) your address, telephone number and e-mail address; (iv) a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent or the law; (v) a statement by you, made under penalty of perjury, that t&quot;he information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner’s behalf; and (vi) an electronic or physical signature of the owner of the copyright or the person authorized to act on behalf of the owner of the copyright interest
            </p>
            <p>
              <u>Counter-Notification Procedures</u>. If you believe that material you posted in the Site or on the Site was removed or access to it was disabled by mistake or misidentification, you may file a counter-notification with us (a &quot;Counter-Notice&quot;) by submitting written notification to our Copyright Agent.
            </p>
            <p>
              Pursuant to the Act, the Counter-Notice must include substantially the following: (i) your physical or electronic signature; (ii) an identification of the material that has been removed or to which access has been disabled and the location at which the material appeared before it was removed or access disabled; (iii) adequate information by which we can contact you (including your name, postal address, telephone number, and, if available, email address); (iv) a statement under penalty of perjury by you that you have a good faith belief that the material identified above was removed or disabled as a result of a mistake or misidentification of the material to be removed or disabled; (v) a statement that you will consent to the jurisdiction of the Federal District Court for the judicial district in which your address is located (or, if you reside outside the United States, for any judicial district in which the Site or the Site may be found) and that you will accept service from the person (or an agent of that person) who provided the Site or the Site with the complaint at issue.
            </p>
            <p>
              The Act allows us to restore the removed content if the party filing the original notice does not file a court action against you within ten business days of receiving the copy of your Counter-Notice.
            </p>
            <p>
              Please be aware that if you knowingly materially misrepresent that material or activity in the Site or on the Site was removed or disabled by mistake or misidentification, you may be held liable by us for damages (including costs and attorneys&apos; fees) under Section 512(f) of the Act.
            </p>
            <p>
              <b>11. Privacy.</b>
            </p>
            <p>
              You acknowledge and agree to the collection, use, and disclosure of your personal information in accordance with our &nbsp;
              <Link href="/policy" sx={{ ':hover': { color: '#ff225e' } }}>Privacy Policy</Link>, which is incorporated into these Terms.
            </p>
            <p>
              <b>12. Modifications.</b>
            </p>
            <p>
              You agree and understand that we may modify part or all of the Site, this Site or the Services without notice, and that we may update these Terms and any other document incorporated by reference therein at any time, and we have no obligation to inform you of changes to the Terms.
            </p>
            <p>
              <b>13. Term and Termination.</b>
            </p>
            <p>
              These Terms will remain in full force and effect while you use the Site.  We reserve the right to discontinue, suspend or terminate support for all or any of the Site at any time. We will provide notice of such discontinuation, suspension or termination in advance to Users who have provided contact information to us whenever possible.
            </p>
            <p>
              <b>14. Risks Inherent to Smart Contracts and Blockchain Technology</b>
            </p>
            <p>
              Please note the following risks in accessing or using the Site, and in connecting your Third-Party Wallet and any NFTs, INK Tokens or other tokens related to the Site:
              <ul>
                <li>INK Token purchases are not investments are intended to have utility and to be used for engagement with INK and the Site;</li>
                <li>The price and liquidity of blockchain assets, including INK Tokens, are extremely volatile and may be subject to large fluctuations;</li>
                <li>Fluctuations in the price of other digital assets could materially and adversely affect INK Tokens, which may also be subject to significant price volatility;</li>
                <li>Legislative and regulatory changes or actions at the state, federal, or international level may adversely affect the use, transfer, exchange, and value of INK Tokens;</li>
                <li>INK Tokens are not legal tender and are not backed by any government and have no monetary value;</li>
                <li>INK Tokens are not securities and may lose value; and</li>
                <li>Transactions to obtain or trade INK Tokens may be irreversible, and, accordingly, losses due to fraudulent or accidental transactions may not be recoverable.</li>
              </ul>
            </p>
            <p>
              At times, due to the underlying blockchain software or network connections, transactions may fail and you may not successfully purchase an INK Token. To the extent transaction fees, including gas, have already been charged and deducted from your Third-Party Wallet, you agree that we have no obligation to refund such transaction fees and accept the risk of this kind of failure by placing an order
            </p>
            <p>
              You acknowledge that the NFT ecosystem is in its infancy and as such, there could be risks that are unknown to us at this time. You agree and understand that you are solely responsible for determining the nature, potential value, suitability, and appropriateness of these risks for yourself, and that we do not give advice or recommendations regarding INK Tokens, including the suitability and appropriateness of INK Tokens. You agree and understand that you access and use this Site at your own risk; however, this brief statement does not disclose all of the risks associated with INK Tokens and other digital assets. You agree and understand that we will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using INK Tokens, however caused, including when you are linking your Third-Party Wallet to our Site. You acknowledge that the blockchain ecosystem is in its infancy and as such, there could be risks that are unknown to us at this time.
            </p>
            <p>
              You acknowledge and agree that the technological and cryptographic systems used to power the Site and to support INK Tokens may be subject to malfunctions, bugs, timing errors, hacking and theft, changes to the protocol rules of the relevant blockchain (i.e., &quot;forks&quot;), hardware, software and/or Internet connectivity failures, unauthorized third party data access, and other technological risks, any of which can adversely affect the relevant smart contracts and may expose you to a risk of loss, forfeiture of your Account and/or your NFTs, INK Tokens or other tokens.  You agree and understand that you access and use the Site at your own risk; however, this brief statement does not disclose all of the risks associated with the blockchain, digital assets and smart contracts. You agree and understand that we will not be responsible for any communication failures, disruptions, errors, distortions or delays you may experience when using the Site or the Site, however caused, including when you are linking your Third-Party Wallet. 
            </p>
            <p>
              You further acknowledgesthat when purchasing INK Token, after delivery of the Tokens, INK has no further or ongoing obligations.  Any roadmap information provided on the site subject to change at INK&apos;s sole and absolute discretion without notice.
            </p>
            <p>
              <b>15. Liability and Indemnification.</b>
            </p>
            <p>
              <b>15.1	Site Provided &quot;As Is&quot; and &quot;As Available&quot;.</b>
            </p>
            <p>
              EXCEPT AS EXPRESSLY PROVIDED TO THE CONTRARY IN A WRITING BY US, INCLUDING IN THE COMMUNITY GUIDELINES, THE INK CONTENT, THE SITE, AND THE NFTs, INK TOKENS, INK CONTENT AND OTHER CONTENT CONTAINED OR LISTED THEREIN ARE PROVIDED EXCLUSIVELY ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED.  WE (AND OUR SUPPLIERS AND AFFILIATES) MAKE NO WARRANTY THAT THE SITE WILL (1) MEET YOUR REQUIREMENTS; (2) BE AVAILABLE ON AN UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE BASIS; OR (3) BE ACCURATE, RELIABLE, COMPLETE, LEGAL, OR SAFE.
            </p>
            <p>
              <b>15.2	Liability. </b>
            </p>
            <p>
              WE WILL NOT BE LIABLE FOR ANY LOSS OF ANY KIND FROM ANY ACTION TAKEN OR TAKEN IN RELIANCE ON MATERIAL OR INFORMATION, CONTAINED IN THE SITE OR ON THE SITE. WE DO NOT REPRESENT OR WARRANT THAT INK CONTENT IS ACCURATE, COMPLETE, RELIABLE, CURRENT OR ERROR-FREE.
            </p>
            <p>
              WHILE WE ATTEMPT TO MAKE YOUR ACCESS TO AND USE OF THE SITE AND THE SITE AND INK CONTENT SAFE, WE CANNOT AND DO NOT REPRESENT OR WARRANT THAT THE SITE, INK CONTENT, ANY NFTS USED TO ACCESS THE BLOCKCHAIN OR OUR SERVERS ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WE CANNOT GUARANTEE THE SECURITY OF ANY DATA THAT YOU DISCLOSE ONLINE. YOU ACCEPT THE INHERENT SECURITY RISKS OF PROVIDING INFORMATION AND DEALING ONLINE OVER THE INTERNET AND WILL NOT HOLD US RESPONSIBLE FOR ANY BREACH OF SECURITY UNLESS IT IS DUE TO OUR GROSS NEGLIGENCE.
            </p>
            <p>
              WE WILL NOT BE RESPONSIBLE OR LIABLE TO YOU FOR ANY LOSS AND TAKE NO RESPONSIBILITY FOR, AND WILL NOT BE LIABLE TO YOU FOR, ANY USE OF YOUR ACCOUNT INCLUDING BUT NOT LIMITED TO ANY LOSSES, DAMAGES OR CLAIMS ARISING FROM: (A) USER ERROR SUCH AS LOST PRIVATE KEYS, FORGOTTEN PASSWORDS, INCORRECTLY CONSTRUCTED SMART CONTRACTS, OR MISTYPED ADDRESSES; (B) SERVER FAILURE OR DATA LOSS; (C) CORRUPTED CRYPTOCURRENCY WALLET FILES, INCLUDING THOSE IN YOUR THIRD-PARTY WALLET; (D) UNAUTHORIZED ACCESS TO APPLICATIONS, THE SITE OR THE SITE; (E) ANY UNAUTHORIZED THIRD PARTY ACTIVITIES, INCLUDING WITHOUT LIMITATION THE USE OF VIRUSES, PHISHING, BRUTE FORCING OR OTHER MEANS OF ATTACK AGAINST THE SITE OR THE SITE.
            </p>
            <p>
              WE ARE NOT RESPONSIBLE FOR SUSTAINED CASUALTIES DUE TO VULNERABILITY OR ANY KIND OF FAILURE, ABNORMAL BEHAVIOR OF SOFTWARE (E.G., WALLET, SMART CONTRACT), BLOCKCHAINS OR ANY OTHER FEATURES OF THE SITE. WE ARE NOT RESPONSIBLE FOR CASUALTIES DUE TO LATE REPORT BY DEVELOPERS OR REPRESENTATIVES (OR NO REPORT AT ALL) OF ANY ISSUES WITH THE BLOCKCHAIN SUPPORTING ASPECTS OF THE SITE INCLUDING FORKS, TECHNICAL NODE ISSUES OR ANY OTHER ISSUES.
            </p>
            <p>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF IMPLIED WARRANTIES IN CONTRACTS WITH CONSUMERS, SO THE ABOVE EXCLUSION MAY NOT APPLY TO YOU.
            </p>
            <p>
              <b>15.3	Limitation of Liability.</b>
            </p>
            <p>
              TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL WE BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY LOST PROFIT OR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL OR PUNITIVE DAMAGES ARISING FROM THESE TERMS, THE SITE, INK CONTENT, USER CONTENT, SERVICES OR THIRD PARTY SITES AND PRODUCTS, OR FOR ANY DAMAGES RELATED TO LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, OR LOSS OF DATA, WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE AND EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. ACCESS TO, AND USE OF, THE SITE, INK CONTENT, INK TOKENS, SERVICES OR THIRD PARTY SITES AND PRODUCTS ARE AT YOUR OWN DISCRETION AND RISK, AND YOU WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM OR MOBILE DEVICE OR LOSS OF DATA RESULTING THEREFROM.
            </p>
            <p>
              IF YOU HAVE AN ISSUE WITH ANY INTERACTION OR TRANSACTION THAT YOU ENTERED INTO WITH ANOTHER USER OF THE SITE OR THE SITE, YOU MUST ADDRESS THAT ISSUE DIRECTLY WITH THE OTHER USER AND NOT WITH US – WE HAVE NO OBLIGATION TO ASSIST IN ANY OF THESE DISPUTES.
            </p>
            <p>
              NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, IN NO EVENT SHALL OUR MAXIMUM AGGREGATE LIABILITY ARISING OUT OF OR IN ANY WAY RELATED TO THIS AGREEMENT, THE ACCESS TO AND USE OF THE SITE, INK CONTENT, NFTS, OR ANY SERVICES EXCEED DIRECT DAMAGES IN EXCESS OF $100, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
            <p>
              <b>15.4	Indemnification.</b>
            </p>
            <p>
              You agree to defend, indemnify, and hold INK and our officers, directors, employees, successors, licensees, and assigns harmless from and against any claims, actions, or demands, including, without limitation, reasonable legal and accounting fees, arising or resulting from (i) breach of any of your representations, warranties or other obligations under these Terms; (ii) your misuse of the Site, INK Tokens or INK Content; (iii) your gross negligence or willful misconduct; (iv) any transaction that you enter into with another user of the Site; or (v) any actual or alleged infringement or misappropriation of third party intellectual property rights related to content you provide, including in the form of User Content or User Ideas. We shall provide notice to you of any such claim, suit, or proceeding and may, but are not obligated to, assist you, at your expense, in defending any such claim, suit, or proceeding.  We reserve the right, at your expense, to assume the exclusive defense and control of any matter that is subject to indemnification under this section. In such case, you agree to cooperate with any reasonable requests assisting our defense of such matter.
            </p>
            <p>
              Notwithstanding any privacy-related laws or regulations to the contrary, we will not and cannot delete data that is stored on the blockchain, including information incorporated into any NFT, INK Token or other token.  You agree, by interacting with the Site, to allow INK to record information regarding your activities or interactions on the Site and to hold us harmless and indemnify us (as described above) for any claims or damages founded upon the publication of and/or the inability to delete such information.  The indemnification above shall be construed to include and encompass any third-party damages or claims founded upon your use of NFTs, INK Tokens or other tokens in conjunction with the Site.
            </p>
            <p>
              <b>16. Governing Law.</b>
            </p>
            <p>
              These Terms, your rights and obligations, and all actions contemplated by, arising out of or related to these Terms shall be governed by the laws of the State of California, as if these Terms are a contract wholly entered into and wholly performed within the State of California.  YOU UNDERSTAND AND AGREE THAT YOUR USE OF THIS SITE AND THE SITE AS CONTEMPLATED BY THESE TERMS SHALL BE DEEMED TO HAVE OCCURRED IN THE STATE OF CALIFORNIA AND BE SUBJECT TO THE INTERNAL LAWS OF THE STATE OF CALIFORNIA WITHOUT REGARD TO ITS CONFLICTS OF LAWS PROVISIONS.
            </p>
            <p>
              <b>17. DISPUTES AND BINDING ARBITRATION AGREEMENT</b>
            </p>
            <p>
              This Section 16 constitutes the &quot;Arbitration Agreement.&quot;
            </p>
            <p>
              <b>A. Informal Negotiations</b>
            </p>
            <p>
              To expedite resolution and control the cost of any dispute, controversy or claim related to these Terms or any other INK GAMES™ Terms (&quot;Dispute&quot;), you and INK GAMES™ agree to first attempt to negotiate any Dispute (except those Disputes expressly identified in Section B, Binding Arbitration, below) informally for at least thirty (30) days before initiating any court proceeding. Such informal negotiations commence upon written notice from one party to the other. INK GAMES™ will send its notice to your billing address (if provided) and email you a copy to the email address that is registered to your Account. You agree to send your notice to INK GAMES™, PO Box 1394, Bend, Oregon 97709, Attn: Legal Department with a copy via email to legal_notices@inkgames.com.
            </p>
            <p>
              <b>B. Binding Arbitration</b>
            </p>
            <p>
              If you and INK GAMES™ are unable to resolve a Dispute through informal negotiations, either you or INK GAMES™ may elect to have the Dispute (except those Disputes expressly excluded below) finally and exclusively resolved by binding arbitration. Any election to arbitrate by one party shall be final and binding on the other.
            </p>
            <p>
              <b>YOU UNDERSTAND AND HEREBY AGREE THAT YOU HEREBY WAIVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.</b> &nbsp;
              The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (&quot;AAA&quot;) and, where appropriate, the AAA&apos;s Supplementary Procedures for Consumer Related Disputes (&quot;AAA Consumer Rules&quot;), both of which are available at the AAA website www.adr.org. The determination of whether a Dispute is subject to arbitration shall be governed by the Federal Arbitration Act and determined by a court rather than an arbitrator. Your arbitration fees and your share of arbitrator compensation shall be governed by the AAA Rules and, where appropriate, limited by the AAA Consumer Rules. If such costs are determined by the arbitrator to be excessive, INK GAMES™ will pay all arbitration fees and expenses. The arbitration may be conducted in person, through the submission of documents, by phone or online. The arbitrator will make a decision in writing, but need not provide a statement of reasons unless requested by a party. The arbitrator must follow applicable law, and any award may be challenged if the arbitrator fails to do so. Except as otherwise provided in these Terms or any other INK GAMES™ Terms, you and INK GAMES™ may litigate in court to compel arbitration, stay proceeding pending arbitration, or to confirm, modify, vacate or enter judgment on the award entered by the arbitrator.
            </p>
            <p>
              <b>C. Restrictions on Dispute Proceedings</b>
            </p>
            <p>
              You and INK GAMES™ agree that any arbitration shall be limited to the Dispute between INK GAMES™ and you individually. To the fullest extent permitted by law, (1) no arbitration shall be joined with any other; (2) there is no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action procedures; and (3) there is no right or authority for any Dispute to be brought in a purported representative capacity on behalf of the general public or any other persons.
            </p>
            <p>
              <b>D. Location</b>
            </p>
            <p>
              Any arbitration shall be initiated in the County of Los Angeles, State of California, United States of America. Any Dispute not subject to arbitration, or where no election to arbitrate has been made, shall be decided by a court of competent jurisdiction within the County of Los Angeles, State of California, United States of America, and you and INK GAMES™ agree to submit to the personal jurisdiction of that court. The application of the United Nations Convention on Contracts for the International Sale of Goods is expressly excluded.
            </p>
            <p>
              <b>E. Equitable Remedies</b>
            </p>
            <p>
              You hereby acknowledge and agree that INK GAMES™ would suffer irreparable harm if these Terms or any of the INK GAMES™ Terms were not specifically enforced. Consequently, in addition to such monetary and other relief as may be recoverable at law, you agree that INK GAMES™ shall be entitled to specific performance or other injunctive relief, without bond, other security, or proof of damages, as remedy for any breach or threatened breach of these Terms or any other INK GAMES™ Terms. Additionally, in the event any legal or administrative action or proceeding is brought by either party in connection with these Terms or any other INK GAMES™ Terms and consistent with the terms of this Section, the prevailing party in such action or proceeding shall be entitled to recover from the other party all of the costs, attorneys&apos; fees and other expenses incurred by such prevailing party as the result of the action or proceeding.
            </p>
            <p>
              <b>F. SURVIVAL OF ARBITRATION AGREEMENT</b>
            </p>
            <p>
              This Arbitration Agreement will survive the termination of your relationship with us.
            </p>
            <p>
              <b>18. Severability Of Terms.</b>
            </p>
            <p>
              If any term, clause, or provision of these Terms is held invalid or unenforceable, then that term, clause, or provision shall be severable from these Terms and will not affect the validity or enforceability of any remaining part of that term, cause, or provision, or any other terms, clause, or provision of these Terms.
            </p>
            <p>
              <b>19. Assignment.</b>
            </p>
            <p>
              These Terms, and any rights, licenses and privileges granted herein, may not be transferred or assigned by you, but may be assigned or transferred by us without restriction, notice or other obligation to you.
            </p>
            <p>
              <b>20. No Waiver.</b>
            </p>
            <p>
              Our failure to exercise or enforce any right or provision of these Terms will not constitute a waiver of such right or provision, and no act, omission or delay by us will be deemed a waiver or release of any of our rights hereunder.
            </p>
            <p>
              <b>21. No Third Party Beneficiaries.</b>
            </p>
            <p>
              Except as otherwise expressly provided herein, these Terms are intended solely for the benefit of the parties and are not intended to confer third party beneficiary rights upon any other person or entity.
            </p>

            <Divider />

            <small>[1]</small>Note – consider whether &quot;Site&quot; should be defined as &quot;Game&quot; or if a secondary term like &quot;Game&quot; should be defined. 
            <small>[2]</small>Note – This is strong default position, even when you know that there is an international audience, but it is okay to delete, if you feel that this statement may be off-putting.
          </Box>
        </Box>
      </PageContent>
    </>
  );
};