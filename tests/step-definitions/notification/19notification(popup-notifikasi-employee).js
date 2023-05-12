import { Given, When, Then } from "@wdio/cucumber-framework";
import allureReporter from '@wdio/allure-reporter';
import LoginPage from "../../pageobjects/login/login.page";
import MainmenuPage from "../../pageobjects/mainmenu.page";
import popupPage from "../../pageobjects/notification/popup-notifikasi.page";
import popupNotifEmployee from "../../pageobjects/notification/19popup-notifikasi-employee.page";

// use allure API for allure reporter
allureReporter.addLabel('Positive Case');
allureReporter.addTestId('[PRINCIPAL] 19. Popup Notifikasi Employee Only');
allureReporter.addFeature('Create Popup Notifikasi Employee Only');

Given (/^I am on the Daftar Popup Notifikasi page$/, async() => {
    await LoginPage.open()
    await LoginPage.setLclStorage()
    await MainmenuPage.open()
    await MainmenuPage.dashboard()
    await LoginPage.acceptCookie()
    await MainmenuPage.popupNotifikasi()
    });
    
    When (/^I click button Buat$/, async() => {
    await popupPage.tombolBuat()
    });
    
    Then (/^System should be leading to Buat Popup Notifikasi page$/, async() => {
    await popupNotifEmployee.Page()
    });

    Given (/^I am on the Buat Popup Notifikasi page$/, async() => {
    await popupNotifEmployee.formPage()
    });

    When (/^I input Judul Popup Notifikasi (.*)$/, async(judul_popup_notifkasi) => {
    await popupNotifEmployee.inputJudul(judul_popup_notifkasi)
    });
        
    Then (/^System should be input Judul Popup Notifikasi$/, async() => {
    await popupNotifEmployee.Page()
    });

    When (/^I select time in Buat Notifikasi$/, async() => {
    await popupNotifEmployee.buatNotifikasi()
    });
        
    Then (/^System should be select Buat Notifikasi$/, async() => {
    await popupNotifEmployee.Page()
    });
   
    When (/^I select time in Jam Berakhir$/, async() => {
    await popupNotifEmployee.jamBerakhir()
    });
            
    Then (/^System should be select Jam Berakhir$/, async() => {
    await popupNotifEmployee.Page()
    });

    When (/^I input Yes in Positif Button (.*)$/, async(positif_button) => {
    await popupNotifEmployee.positifButton(positif_button)
    });
            
    Then (/^System should be input in Positif Button$/, async() => {
    await popupNotifEmployee.Page()
    });

    When (/^I input No in Negatif Button (.*)$/, async(negatif_button) => {
    await popupNotifEmployee.negatifButton(negatif_button)
    });
                    
    Then (/^System should be input in Negatif Button$/, async() => {
    await popupNotifEmployee.Page()
    });

    When (/^I insert gambar in Tarik Gambar Popup Notifikasi in Gambar Popup Notifikasi$/, async() => {
    await popupNotifEmployee.insertGambar()
    });

    Then (/^System show Gambar Popup Notifikasi$/, async() => {
    await popupNotifEmployee.Page()
    });

    When (/^I select Customer in Grup Pengguna$/, async() => {
    await popupNotifEmployee.grupPengguna()
    });
    
    Then (/^System should be select Customer in Grup Pengguna$/, async() => {
    await popupNotifEmployee.Page()
    });

    When (/^I select Employee Only in Tipe Employee$/, async() => {
    await popupNotifEmployee.tipeEmployee()
    });
        
    Then (/^System should be select Employee Only$/, async() => {
    await popupNotifEmployee.Page()
    });

    When (/^I input Dari in Batasan Umur (.*)$/, async(input_dari) => {
    await popupNotifEmployee.BatasanUmurDari(input_dari)
    });
            
    Then (/^System should be input Dari in Batasan Umur$/, async() => {
    await popupNotifEmployee.Page()
    });
    
    When (/^I input Sampai in Batasan Umur (.*)$/, async(input_sampai) => {
    await popupNotifEmployee.BatasanUmurSampai(input_sampai)
    });
                
    Then (/^System should be input Sampai in Batasan Umur$/, async() => {
    await popupNotifEmployee.Page()
    });
    
    When (/^I select Statistic Page in Tipe Konten$/, async() => {
    await popupNotifEmployee.tipeKonten()
    });
                    
    Then (/^System should be select Statistic Page$/, async() => {
    await popupNotifEmployee.Page()
    });
    
    When (/^I input Isi Halaman (.*)$/, async(isi_halaman) => {
    await popupNotifEmployee.isiHalaman(isi_halaman)
    });
                                    
    Then (/^System should be input Isi Halaman$/, async() => {
    await popupNotifEmployee.Page()
    });
    
    When (/^I click button Simpan$/, async() => {
    await popupNotifEmployee.btnSimpan()
    });
            
    Then (/^System should be submit data and leading to Daftar Popup Notifikasi page$/, async() => {
    await popupPage.Page()
    });