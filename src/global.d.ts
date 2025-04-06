import UserWithPermissionType from "@/types/user-with-permission-type";

export declare global {
  namespace NodeJS {
    interface Process extends EventEmitter {
      env: {
        [x: string]: any;

        API_ENV: "development" | "production" | "local";
      };
    }
  }

  namespace Express {
    interface Request {
      context?: {
        [x: string]: any;

        currentUser?: Record<string, any>;
        currentUserId?: string;
        userWithPermissions?: UserWithPermissionType;
        currentUserMembership?: Record<string, any>;

        currentOrganization?: Record<string, any>;
        currentOrganizationId?: string;

        currentProgram?: Record<string, any>;
        currentProgramId?: string;

        currentEvent?: Record<string, any>;

        currentCompany?: Record<string, any>;
        currentCompanyId?: string;

        currentFacility?: Record<string, any>;
        currentFacilityId?: string;
      };
    }
  }
}
