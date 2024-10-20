<template>
  <q-layout view="hhh lpr fff" class="bg-grey-8">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title class="q-pt-lg">
          <img src="~assets/railtourh.png" />
        </q-toolbar-title>
      </q-toolbar>

      <!--
      <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs>
      -->
    </q-header>

    <q-page-container class="">
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white">
      <div class="row q-pa-md">
        <div class="col">
          <div class="row justify-start">
            <div class="col-auto q-mr-xs">
              <a href="https://www.facebook.com/srpsrailtours" class="text-white">
                <q-icon name="fa-brands fa-square-facebook" size="lg"></q-icon>
              </a>
            </div>
            <div class="col-auto q-mr-xs">
              <a
                href="https://www.instagram.com/srpsrailtours"
                class="text-white"
              >
                <q-icon name="fa-brands fa-square-instagram" size="lg"></q-icon>
              </a>
            </div>
            <div class="col-auto">
              <a href="https://x.com/srpsrailtours" class="text-white">
                <q-icon name="fa-brands fa-square-x-twitter" size="lg"></q-icon>
              </a>
            </div>
          </div>

          <div>
            <p class="text-weight-bold q-pt-lg">
              The Scottish Railway Preservation Society - Railtours
            </p>
            <p>
              Operators of Bo'ness and Kinneil Railway and Museum of Scottish
              Raulways. A Scottish Charity, SC002375, regulated by the Scottish
              Charity Regulator.
            </p>
          </div>
          <div>
            <p>
              <q-icon name="fa-solid fa-square-phone" size="lg"></q-icon>
              0131 202 1033
            </p>
            <p>
              <q-icon name="fa-solid fa-square-envelope" size="lg"></q-icon>
              railtours@srps.org.uk
            </p>
          </div>
        </div>

        <div class="col">
          <p class="text-weight-bold">Other SRPS Websites</p>
          <q-list dense padding>
            <q-item>
              <q-item-section>
                <a class="text-white" href="https://www.srps.org.uk/"
                  >Scottish Railway Preservation Society</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a class="text-white" href="https://www.bkrailway.co.uk/"
                  >Bo'ness & Kinneil Railway</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a class="text-white" href="https://www.srpsdiesel.co.uk"
                  >SRPS Diesel Group</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a
                  class="text-white"
                  href="https://museumofscottishrailways.org.uk/"
                  >Museum of Scottish Railways</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a class="text-white" href="https://www.srpssteam.com/"
                  >SRPS Steam Group</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a class="text-white" href="https://www.gotopcs.net/"
                  >SRPS Carriage &amp; Wagon Dept.</a
                >
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <a
                  class="text-white"
                  href="https://www.srpsbirkhillgroup.org.uk/"
                  >SRPS Birkhill Station Development</a
                >
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>
