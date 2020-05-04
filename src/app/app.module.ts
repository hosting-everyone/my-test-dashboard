import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { CommandsComponent } from './commands/commands.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { InviteComponent } from './invite/invite.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { GuildComponent } from './dashboard/guild/guild.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { HomeComponent } from './home/home.component';
import { CommandsModuleComponent } from './dashboard/commands-module/commands-module.component';
import { AnnounceModuleComponent } from './dashboard/announce-module/announce-module.component';
import { AutoModModuleComponent } from './dashboard/auto-mod-module/auto-mod-module.component';
import { GeneralModuleComponent } from './dashboard/general-module/general-module.component';
import { MusicModuleComponent } from './dashboard/music-module/music-module.component';
import { LogModuleComponent } from './dashboard/log-module/log-module.component';
import { SettingsModuleComponent } from './dashboard/settings-module/settings-module.component';
import { XPModuleComponent } from './dashboard/xp-module/xp-module.component';
import { GuildSidebarComponent } from './dashboard/guild-sidebar/guild-sidebar.component';
import { LeaderboardModuleComponent } from './dashboard/leaderboard-module/leaderboard-module.component';
import { XPCardComponent } from './xp-card/xp-card.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { CustomizeXPCardComponent } from './customize-xp-card/customize-xp-card.component';
import { MaterialModule } from './material-module';
import { PremiumDirective } from './dashboard/directives/premium.directive';
import { SaveChangesComponent } from './dashboard/save-changes/save-changes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { ProComponent } from './pro/pro.component';
import { DocsComponent } from './docs/docs.component';
import { CleanDateTimePipe } from './pipes/clean-date-time.pipe';
import { MemberUsernameComponent } from './member-username/member-username.component';
import { DocsSidebarComponent } from './docs-sidebar/docs-sidebar.component';
import { ZippyComponent } from './zippy/zippy.component';
import { AuditLogWidgetComponent } from './dashboard/widgets/audit-log-widget/audit-log-widget.component';
import { CommandsWidgetComponent } from './dashboard/widgets/commands-widget/commands-widget.component';
import { MiniDatePipe } from './pipes/mini-date.pipe';
import { MessagePreviewComponent } from './message-preview/message-preview.component';
import { MessagesWidgetComponent } from './messages-widget/messages-widget.component';
import { WarningsModuleComponent } from './dashboard/warnings-module/warnings-module.component';

export class AlertErrorHandler implements ErrorHandler {
  handleError(error: any) {
    alert(error);
  }
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CommandsComponent,
    AuthComponent,
    LoginComponent,
    InviteComponent,
    LogoutComponent,
    DashboardComponent,
    SidebarComponent,
    GuildComponent,
    SpinnerComponent,
    CommandsModuleComponent,
    AnnounceModuleComponent,
    AutoModModuleComponent,
    GeneralModuleComponent,
    MusicModuleComponent,
    XPModuleComponent,
    LogModuleComponent,
    SettingsModuleComponent,
    XPModuleComponent,
    GuildSidebarComponent,
    LeaderboardModuleComponent,
    XPCardComponent,
    CustomizeXPCardComponent,
    DashboardSidebarComponent,
    PremiumDirective,
    SaveChangesComponent,
    NotFoundComponent,
    PaymentSuccessComponent,
    ProComponent,
    DocsComponent,
    CleanDateTimePipe,
    MemberUsernameComponent,
    DocsSidebarComponent,
    ZippyComponent,
    AuditLogWidgetComponent,
    CommandsWidgetComponent,
    MiniDatePipe,
    MessagePreviewComponent,
    MessagesWidgetComponent,
    WarningsModuleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    HighlightModule,
    ChartsModule
  ],
  exports: [PremiumDirective],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: { languages: getHighlightLanguages() }
    },
    { provide: ErrorHandler, useClass: AlertErrorHandler }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function getHighlightLanguages() {
  return {
    json: () => import('highlight.js/lib/languages/json')
  };
}