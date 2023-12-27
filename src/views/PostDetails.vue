<template>
  <component :is="name" :name="name" />
</template>

<script>
import data_center_upgrade from "./blogs/data_center_upgrade.vue";
import contract_signing from "./blogs/contract_signing.vue";
import zictia___softnet_contract_signing from "./blogs/zictia___softnet_contract_signing.vue";
import zictia___softnet from "./blogs/zictia___softnet.vue";
import zictia___zanlink_signing from "./blogs/zictia___zanlink_signing.vue";
import zictia___zanlink from "./blogs/zictia___zanlink.vue";
import zantel_contract_signing from "./blogs/zantel_contract_signing.vue";
import zictia_and_ttcl_contract_signing from "./blogs/zictia_and_ttcl_contract_signing.vue";
import zictia_and_ttcl_guest_of_honors from "./blogs/zictia_and_ttcl_guest_of_honors.vue";
import zictia_and_ttcl_meeting from "./blogs/zictia_and_ttcl_meeting.vue";
import zictia_and_ttcl from "./blogs/zictia_and_ttcl.vue";
import zictia_and_zantel from "./blogs/zictia_and_zantel.vue";

export default {
  name: "PostDetails",
  props: ["name"],
  components: {
    data_center_upgrade,
    contract_signing,
    zictia___softnet_contract_signing,
    zictia___softnet,
    zictia___zanlink_signing,
    zictia___zanlink,
    zantel_contract_signing,
    zictia_and_ttcl_contract_signing,
    zictia_and_ttcl_guest_of_honors,
    zictia_and_ttcl_meeting,
    zictia_and_ttcl,
    zictia_and_zantel,
  },
};
</script>
