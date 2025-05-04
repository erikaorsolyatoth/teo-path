<template>
  <div>
<!--    <b-img :src="require('/src/assets/header-picture-background.png')" fluid-grow alt="People in a seating image"></b-img>-->
    <b-img :src="require('/src/assets/header-picture-logo.png')" fluid-grow alt="People in a seating image"></b-img>
  </div>

  <div class="section-padding" style="flex: min-content">
    <h2>{{ $t('sectionContacts.contactsTitle') }}</h2>
    <h5>{{ $t('sectionContacts.contactsDescription') }}</h5>
    <h4>{{ $t('sectionContacts.contactsText') }}</h4>
    <b-list-group>
      <b-list-group-item><img src="../assets/contacts/whatsapp-button.png" height="30" width="30"/><b> WhatsApp: +447947572606</b></b-list-group-item>
      <b-list-group-item><img src="../assets/contacts/instagram-button.png" height="30" width="30"/><b> Instagram: https://www.instagram.com/teopath</b></b-list-group-item>
      <b-list-group-item><img src="../assets/contacts/email-button.png" height="30" width="30"/><b> Email: era@teopath.com</b></b-list-group-item>
    </b-list-group>
  </div>
</template>

<script setup lang="ts">
</script>