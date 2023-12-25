<template>
  <SmallBanner />
  <HeaderSectionCenter :items="HeaderViewCenter" />
  <HeaderContent :headerContents="headerContentItems3" />
  <HeaderWithBg :headerContentBlues="headerContentBlueItems3" />
  <HeaderContent :headerContents="headerContentBlueItems2" />
  <HeaderWithBg :headerContentBlues="headerContentItems2" />
  <HeaderContent :headerContents="headerContentBlueItems" />
  <HeaderWithBg :headerContentBlues="headerContentItems" />
  <BackGround :backgroundImg="backgroundItems" />
</template>

<script>
import SmallBanner from "@/components/SmallBanner.vue";
import HeaderSectionCenter from "@/components/HeaderSectionCenter.vue";
import HeaderContent from "@/components/HeaderContent.vue";
import HeaderWithBg from "@/components/HeaderWithBg.vue";
import BackGround from "@/components/BackGround.vue";
export default {
  name: "OurServices",
  components: {
    SmallBanner,
    HeaderContent,
    HeaderSectionCenter,
    HeaderWithBg,
    BackGround,
  },

  data() {
    return {
      HeaderViewCenter: [
        {
          bg: "home/services_header.png",
          logo: require("../assets/imgs/home/logo_white.png"),
          title: "Tailored ICT Solutions for Zanzibar's Progress",
          content:
            "Embark on a journey through ZICTIA's diverse range of cutting-edge services,rafted to meet the dynamic needs of Zanzibar's evolving technological landscape",
          blue_title:
            "Our Comprehensive Services to Fulfill Your Digital Needs",
        },
      ],
      headerContentItems: [
        {
          id: "vpn",
          photo: require("../assets/imgs/home/services_vpn.png"),
          title: "VPN",
          content:
            "Our VPN services are designed to enhance your network experience by forwarding all network traffic to a secure VPN network. This approach offers numerous advantages, including the ability to access local network resources remotely and bypass internet censorship.",
          content2:
            "At ZICTIA, we prioritize the security of your connections. To achieve this, we employ a meticulously crafted VPN infrastructure that operates on both Layer 2 and Layer 3 of the communication stack. This ensures that your connection between your client and our company's server remains robust and protected, safeguarding your data and online activities.",
        },
      ],
      headerContentBlueItems: [
        {
          id: "ip",
          photo: require("../assets/imgs/home/services_ip.png"),
          title: "IP-MPLS",
          content:
            "Our IP-MPLS services harness cutting-edge technology to enable lightning-fast data switching. This innovative approach not only yields substantial performance improvements but also offers unparalleled flexibility to meet your evolving business needs.",
          content2:
            "One of the standout features of IP-MPLS is its ability to seamlessly extend a Local Area Network (LAN) across vast distances, effectively connecting remote offices as if they were physically conjoined. This capability empowers businesses to operate efficiently and collaboratively regardless of geographic boundaries.",
          button: "",
        },
      ],
      headerContentItems2: [
        {
          id: "location",
          photo: require("../assets/imgs/home/services_colocation.png"),
          title: "Co-Location",
          content:
            "Our Co-location services are tailored to meet your specific needs, offering a range of options to suit your requirements. We provide dedicated space, reliable power, efficient cooling, and seamless connectivity within our state-of-the-art facility.",
          content2:
            "Our pricing structure is designed with flexibility in mind, allowing you to choose the most suitable co-location solution for your organization. Whether you require space for a single 1U server, half a rack, or a full rack, we have you covered. Our tariffs are customized to align with your preferences, ensuring you receive the services you need at a competitive rate.",
        },
      ],
      headerContentBlueItems2: [
        {
          id: "vm",
          photo: require("../assets/imgs/home/services_vm.png"),
          title: "Virtual Machines (VM)",
          content:
            "ZICTIA is your trusted provider of Virtual Machine (VM) services, tailored to cater to the distinct requirements of individual customers, small and medium-sized enterprises (SMEs), and corporate clients. Our VM services stand out for their exceptional reliability and security, offering you peace of mind in the digital landscape.",
          content2:
            "Our virtual server infrastructure is built on a foundation of robustness and redundancy, ensuring your virtual machines are consistently available with minimal downtime. Whether you're an individual seeking virtual resources or a corporate entity demanding high-performance VMs, you can rely on ZICTIA for uninterrupted operations. Moreover, we prioritize security with cutting-edge measures like encryption, firewalls, and intrusion detection systems, adhering to industry best practices to safeguard your data.",
          button: "",
        },
      ],
      headerContentItems3: [
        {
          id: "capacity",
          photo: require("../assets/imgs/home/services_capacity.png"),
          title: "Internet Capacity",
          content:
            "Our focus is on providing high-quality capacity services, and we operate as a wholesale business, primarily serving large capacity interfaces. It's important to note that our capacity services are exclusively offered to Service Providers who hold licenses from the Tanzania Communications Regulatory Authority (TCRA).",
          content2:
            "To ensure robust and reliable connectivity, we utilize Standard Synchronous Digital Hierarchy (SDH) and Standard IP Ethernet technologies, enabling us to offer end-to-end services in a protected mode. These services are available across a range of bandwidth options, ensuring that we can meet the diverse connectivity requirements of our valued clients.",
        },
      ],
      headerContentBlueItems3: [
        {
          id: "internet",
          photo: require("../assets/imgs/home/services_covernment.png"),
          title: "Internet for Governmental Purpose",
          content:
            "In today's digital landscape, ZICTIA specializes in providing high-speed internet services uniquely tailored for government institutions. Our connectivity solutions streamline internal communication, grant access to vital online resources, and support web-based applications. ",
          content2:
            "Additionally, our robust infrastructure enables efficient video conferencing, reducing the need for physical meetings and promoting remote collaboration—a critical element of modern governance. ZICTIA is committed to delivering reliable and secure internet services that empower government institutions to operate efficiently and fulfill their responsibilities to the public with excellence. Trust us to be your partner in the digital transformation of government services.",
          button: "",
        },
      ],
      backgroundItems: {
        bg: "home/services_bottom.png",
        logo: "logo",
        title: "title",
        content: "content",
      },
    };
  },
};
</script>
